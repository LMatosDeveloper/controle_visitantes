const db = require('./db'); // Importando a configuração do banco

// Definindo o modelo Cadastro
const Cadastro = db.sequelize.define('visitantes', {
    nome: {
        type: db.Sequelize.STRING(100),  // Limite de 100 caracteres para o nome
        allowNull: false  // Garante que o nome não pode ser nulo
    },
    cpf_visitante: {
        type: db.Sequelize.STRING(11),  // Definindo o CPF como string de 11 caracteres
        allowNull: false,
        unique: true  // Garantir que o CPF seja único
    },
    hora_entrada: {
        type: db.Sequelize.TIME,  // Armazena apenas a hora (sem data)
        allowNull: false  // A hora de entrada é obrigatória
    },
    hora_saida: {
        type: db.Sequelize.TIME,  // Armazena apenas a hora (sem data)
        allowNull: false  // A hora de saída é obrigatória
    },
    motivo: {
        type: db.Sequelize.STRING(40), 
    },

    empresa: {
        type: db.Sequelize.STRING(40), 
    },
    data: {
        type: db.Sequelize.DATE,  // Armazena data e hora
        allowNull: false,  // A data é obrigatória
        defaultValue: new Date()
    }
    
});

//Cadastro.sync({force: true})

module.exports = Cadastro
