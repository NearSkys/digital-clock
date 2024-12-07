const express = require('express');
const path = require('path'); 
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});