
const express = require('express');
const request = require('request');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Olá mundo!')
});

app.get('/endpointExterno', (req, res) => {
    request('https://jsonplaceholder.typicode.com/todos/1', function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    });
});

app.post('/post', (req, res) => {
    console.log("Requisição post: ", {requestBody: req.body});
    res.send("Requisição post!");
});

app.patch('/patch', (req, res) => {
    console.log("Requisição patch: ", {requestBody: req.body});
    res.send("Requisição patch!");
});

app.listen(port, () => {
    console.log("Aplicação iniciada!")
})


