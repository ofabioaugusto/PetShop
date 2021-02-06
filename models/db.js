//Iniciando o Sequelize
const Sequelize = require('sequelize')

//Conectando ao banco de dados MySQL
const sequelize = new Sequelize('petshop_db', 'root', 'F@bio47454011', {
    host: "localhost",
    dialect: "mysql"
})

//Exportando o modelo
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

//Log do resultado da conexão com o mysql
sequelize.authenticate().then(function () {
    console.log("Conectado com Sucesso ao MySQL... ")
}).catch(function (erro) {
    console.log("Connection Error: " + erro)
})