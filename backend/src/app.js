const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());


app.post('/users', (request, response) => {

    const body = request.body;

    console.log(body);

    return response.json({
        event: 'Semana Omnistack 11.0',
        aluno: 'Pedro Lucas Bezerra'
    });
});

module.exports = app;