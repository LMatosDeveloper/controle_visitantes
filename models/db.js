const Sequelize = require('sequelize');  // Classe Sequelize
const sequelize = new Sequelize('controlevisitantes', 'root', 'Bankai@2024', {
    host: 'localhost',
    dialect: 'mysql'
})

// Testa a conexão com o banco de dados
sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco bem sucedida!');
    })
    .catch((erro) => {
        console.log('Falha na conexão com banco de dados!' + erro);
    })

module.exports = {
    Sequelize,  // Aqui exportamos a classe Sequelize
    sequelize   // Aqui exportamos a instância de conexão sequelize
}
