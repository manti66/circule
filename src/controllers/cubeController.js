
const router = require('express').Router();
const cubes = require('../db.json')
const fs = require('fs/promises');
const path = require('path');

const { json, redirect } = require('express/lib/response');
router.get('/create', (req, res) => {
    res.render('create')
})

router.post('/create', (req, res) => {
    const cube = req.body

    if (cube.name < 2) {
        res.status(400).send('Error');
        return
    }

    cubes.push(cube);
    fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes, " ", 4), {encoding: 'utf-8'})
        .then(()=>{
            res.redirect('/')
        })
        .catch(err => {
            res.status(400).send(err)
        })


})

module.exports = router;