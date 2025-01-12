const express = require('express')
const path = require('path')
// const route = express.Router();
const app = express()

app.use(express.static(path.join(__dirname, '../src')))

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/time-register', (req, res) => {
    const filePath = path.join(__dirname, '../src/index.html')
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Erro ao enviar o arquivo:', err)
            res.status(500).send('Erro ao carregar a página.')
        }
    });
});

app.post('/time-register', (req, res) => {
    const now = new Date()
    const serverTime = {
        dayOfWeek: now.getDay(), 
        day: now.getDate(), 
        month: now.getMonth() + 1, 
        year: now.getFullYear(), 
        hours: now.getHours(),
        minutes: now.getMinutes(), 
        seconds: now.getSeconds(), 
    };
    if (serverTime.dayOfWeek === 0) {
        serverTime.dayOfWeek = 'Domingo'
    } else if (serverTime.dayOfWeek === 1) {
        serverTime.dayOfWeek = 'Segunda-feira'
    } else if (serverTime.dayOfWeek === 2) {
        serverTime.dayOfWeek = 'Terça-feira'
    } else if (serverTime.dayOfWeek === 3) {
        serverTime.dayOfWeek = 'Quarta-feira'
    } else if (serverTime.dayOfWeek === 4) {
        serverTime.dayOfWeek = 'Quinta-feira'
    } else if (serverTime.dayOfWeek === 5) {
        serverTime.dayOfWeek = 'Sexta-feira'
    } else if (serverTime.dayOfWeek === 6) {
        serverTime.dayOfWeek = 'Sábado'
    }

    res.json(serverTime) // Envia o JSON
});

// route.get('/time-register', (req, res) => {
//     res.sendFile(path.join(__dirname, '../src/index.html')); 
// })

// route.post('/time-register', (req, res) => {
//     const serverDay = new Date().getDay();
//     const serverMonth = new Date().getMonth()+1;
//     const serverYear = new Date().getFullYear();
//     const serverDate = new Date().getDate();
//     const serverHours = new Date().getHours();
//     const serverMinutes = new Date().getMinutes();
//     const serverSeconds = new Date().getSeconds();
//     // console.log(serverDay);
//     res.send({serverDay, serverMonth, serverYear, serverDate, serverHours, serverMinutes, serverSeconds});
// })

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
    console.log(`http://localhost:${PORT}`)
});


//Criar toda de contagem de horas e minutos, 

//Criar rota mostrar todos os pontos

//Criar opção de gerar um token de acesso, todas as empresas serão como grupos que geram um token de acesso para os colaboradores

//Criar Dasboard para os administradores

//Criar Dashboard para os colaboradores

//Criar sistema de login e registro e recuperação de senha

//Criar opção de criar perfil, editar perfil e excluir perfil


