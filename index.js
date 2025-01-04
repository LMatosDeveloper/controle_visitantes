const express = require('express')
const app = express()
const port = 8081
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const Cadastro = require('./models/Cadastro')
const db = require('./models/db')

// Configuração do motor de templates Handlebars
app.engine('handlebars', engine({
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Servindo arquivos estáticos (CSS, imagens, etc.)
app.use(express.static(path.join(__dirname, 'public')));  // Tornando 'public' acessível

// Body Parser para lidar com requisições POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para exibição do formulário
app.get('/cad', (req, res) => {
   res.render('form');
});


app.get('/', (req, res)=>{
    db.sequelize.query('SELECT * FROM visitantes')
    .then(result => {
        const visitantes = result[0];
        res.render('home', { visitantes });
    })
    .catch(error => {
        console.error('Erro ao buscar visitantes:', error);
        res.status(500).send('Erro ao buscar visitantes.');
    });
})

// Rota para lidar com o envio do formulário
app.post('/add', (req, res) => {
    Cadastro.create({
        nome: req.body.nome_visit,
        cpf_visitante: req.body.cpf_visit,
        hora_entrada: req.body.hora_entrada,
        hora_saida: req.body.hora_saida,
        motivo: req.body.motivo
    }).then(function(){
        res.redirect('/')
    }).catch(function(){{
        res.send('Houve um erro ao adicionar o visitante' + erro)
    }})
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
