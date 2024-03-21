const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/sumar', (req, res) => {
    // Aquí implementarás la lógica para sumar las matrices
    // y devolver el resultado como respuesta.
    const { matriz1, matriz2 } = req.body;

    if (!matriz1 || !matriz2 || !Array.isArray(matriz1) || !Array.isArray(matriz2) ||
        matriz1.length === 0 || matriz2.length === 0 ||
        matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length) {
        return res.status(400).json({ error: 'Las matrices proporcionadas no son válidas.' });
    }
    const resultado = [];

    for (let i = 0; i < matriz1.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matriz1[0].length; j++) {
            resultado[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }
    res.json(resultado);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});