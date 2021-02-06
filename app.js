const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
const Ficha = require('./models/ficha');
const passport = require('passport');
const session = require('express-session');

//Autenticação com passport
require('./auth')(passport);
app.use(session({
    secret: '123', //configure um segredo seu aqui
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 60 * 1000 } //30min
}))
app.use(passport.initialize());
app.use(passport.session());

//Iniciando o Handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Configuração de Arquivos Estaticos (CSS + JS)
app.use('/views', express.static(__dirname + '/views'));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Rotas
app.get('/', (req, res, next) => {
    if (req.query.fail)
        res.render('login', { layout: false, message: 'Usuário e/ou senha incorretos!' });
    else
        res.render('login', { layout: false, message: null });
});

app.get('/login', (req, res, next) => {
    if (req.query.fail)
        res.render('login', { layout: false, message: 'Usuário e/ou senha incorretos!' });
    else
        res.render('index', { message: null });
});

app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/index',
        failureRedirect: 'login?fail=true'
    })
);

app.get('/novaficha', function(req, res) {
    res.render('novaficha');
});

app.get('/deleteficha', function(req, res) {
    res.render('deleteficha');
});

app.get('/consultar', function(req, res) {
    Ficha.findAll({
        order: [
            ['data_proced', 'Desc'],
            ['hora_proced', 'Desc'],
        ],
    }).then(function(conficha) {
        res.render('consultar', { conficha: conficha });
    })
});

app.get('/calendario', function(req, res) {
    res.render('calendario');
});

app.get('/relatorios', function(req, res) {
    res.render('relatorios');
});

app.get('/ajuda', function(req, res) {
    res.render('ajuda');
});
app.get('/index', function(rew, res) {
    res.render('index');
});

app.get('/deleteficha/:id_ficha', function(req, res) {
    Ficha.destroy({ where: { 'id_ficha': req.params.id_ficha } }).catch(function(erro) {
        res.send("DADOS INSERIDOS INVÁLIDOS.<br><br>" + "Retorne para página e tente novamente.<br><br>" + "Erro: <br><br>" + erro)
    }).then(function() {
        return res.redirect('index');
    }).catch(function(erro) {
        res.send("Esta ficha não existe!" + erro)
    })
})

app.get('/editarficha', function(rew, res) {
    res.render('editarficha');
});

//Cadastrando Nova Ficha
app.post('/cadnovaficha', function(req, res) {
    Ficha.create({
        nome_cliente: req.body.nome_cliente,
        telefone_cliente: req.body.telefone_cliente,
        nome_pet: req.body.nome_pet,
        cor_pelagem: req.body.cor_pelagem,
        especie_pet: req.body.especie_pet,
        data_nasc_pet: req.body.data_nasc_pet,
        cad_pet: req.body.cad_pet,
        data_proced: req.body.data_proced,
        hora_proced: req.body.hora_proced,
        proced_realizado: req.body.proced_realizado,
        proced_banho: req.body.proced_banho,
        proced_tosa: req.body.proced_tosa,
        proced_banho_th: req.body.proced_banho_th,
        proced_tosa_g: req.body.proced_tosa_g,
        proced_tosa_t: req.body.proced_tosa_t,
        proced_escov: req.body.proced_escov,
        proced_hid: req.body.proced_hid,
        proced_outros: req.body.proced_outros,
        pelag_pulgas: req.body.pelag_pulgas,
        pelag_carrapato: req.body.pelag_carrapato,
        pelag_nos: req.body.pelag_nos,
        pelag_desembolo: req.body.pelag_desembolo,
        pelag_verrugas: req.body.pelag_verrugas,
        pelag_manchas: req.body.pelag_manchas,
        pelag_machucado: req.body.pelag_machucado,
        pelag_otite: req.body.pelag_otite,
        pelag_sec_genital: req.body.pelag_sec_genital,
        pelag_outros: req.body.pelag_outros,
        obj_coleira: req.body.obj_coleira,
        obj_guia: req.body.obj_guia,
        obj_enforc: req.body.obj_enforc,
        obj_escova: req.body.obj_escova,
        obj_pasta: req.body.obj_pasta,
        obj_shamp: req.body.obj_shamp,
        obj_outros: req.body.obj_outros,
        pos_b_adereco: req.body.pos_b_adereco,
        pos_b_acessorio: req.body.pos_b_acessorio,
        pos_b_perfume: req.body.pos_b_perfume,
        pos_b_outros: req.body.pos_b_outros,
        saude_cardiopatia: req.body.saude_cardiopatia,
        saude_epiletico: req.body.saude_epiletico,
        saude_mob_red: req.body.saude_mob_red,
        saude_nec_acomp: req.body.saude_nec_acomp,
        saude_outros: req.body.saude_outros,
        outras_inf_pet: req.body.outras_inf_pet
    }).then(function() {
        return res.redirect('index');
    }).catch(function(erro) {
        res.send("DADOS INSERIDOS INVÁLIDOS.<br><br>" + "Retorne para página e tente novamente.<br><br>" + "houve um erro: <br><br>" + erro)
    })
})

//Atualizando Ficha
app.post('/updateficha/:idficha', function(req, res) {
            Ficha.update(({ where: { 'id_ficha': req.params.id_ficha } }).catch(function(erro) {
                    res.send("DADOS INSERIDOS INVÁLIDOS.<br><br>" + "Retorne para página e tente novamente.<br><br>" + "Erro: <br><br>" + erro)
                }).then(function() {
                    return res.redirect('index');
                }).catch(function(erro) {
                    res.send("Esta ficha não existe!" + erro)
                })
            })






        //Inicialização da Aplicação
        app.listen(8085, function() {
            console.log("Aplicação Iniciada com Sucesso!")
        });