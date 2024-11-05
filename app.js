// app.js
const express = require('express');

const app = express();
const PORT = 3000;

// Rute untuk root
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the Express App!');
});

// Mulai server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
