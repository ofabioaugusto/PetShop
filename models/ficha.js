// Conexão com o banco de dados
const db = require('./db')

// Criação da tabela ficha
const Ficha = db.sequelize.define('tbl_ficha', {

    id_ficha: {
        type: db.Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome_cliente: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    telefone_cliente: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    nome_pet: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    cor_pelagem: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    especie_pet: {
        type: db.Sequelize.ENUM('Cachorro', 'Gato', 'Gado', 'Ave', 'Réptil', 'Roedor')
    },
    data_nasc_pet: {
        type: db.Sequelize.DATEONLY,
        allowNull: true
    },
    cad_pet: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    data_proced: {
        type: db.Sequelize.DATEONLY,
        allowNull: false
    },
    hora_proced: {
        type: db.Sequelize.TIME,
        allowNull: false
    },

    proced_realizado: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    proced_tosa: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    proced_banho_th: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    proced_tosa_g: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    proced_tosa_t: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    proced_escov: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    proced_hid: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    proced_outros: {
        type: db.Sequelize.TEXT,
        allowNull: true
    },
    pelag_pulgas: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    pelag_carrapato: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    pelag_nos: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    pelag_desembolo: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    pelag_verrugas: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    pelag_manchas: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    pelag_machucado: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    pelag_otite: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    pelag_sec_genital: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    pelag_outros: {
        type: db.Sequelize.TEXT,
        allowNull: true
    },
    obj_coleira: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    obj_guia: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    obj_enforc: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    obj_escova: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    obj_pasta: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    obj_shamp: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    obj_outros: {
        type: db.Sequelize.TEXT,
        allowNull: true
    },
    pos_b_adereco: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    pos_b_acessorio: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    pos_b_perfume: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    pos_b_outros: {
        type: db.Sequelize.TEXT,
        allowNull: true
    },
    saude_cardiopatia: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    saude_epiletico: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    saude_mob_red: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    saude_nec_acomp: {
        type: db.Sequelize.ENUM('Sim', 'Não')
    },
    saude_outros: {
        type: db.Sequelize.TEXT,
        allowNull: true
    },
    outras_inf_pet: {
        type: db.Sequelize.TEXT,
        allowNull: true
    }
})

// Sinconização do comando com o banco de dados
//Ficha.sync({ force: true })

//Exportando o modelo
module.exports = Ficha