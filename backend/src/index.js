const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.post('/users', (request, response) => {

    const body = request.body;

    console.log(body);

    return response.json({
        event: 'Semana Omnistack 11.0',
        aluno: 'Pedro Lucas Bezerra'
    });
});

app.listen(3333);