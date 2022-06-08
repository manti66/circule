

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Helloo')
})

app.listen(5000, () => console.log('Finisshhhhh'))