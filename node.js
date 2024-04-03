import express from 'express';
const app = express();
const port = 4500;
app.use(express.static('public'));

app.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
});