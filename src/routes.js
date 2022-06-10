

const express = require('express');
const homeController = require('./controllers/homeController');

const cubeController = require('./controllers/cubeController')
const router = express.Router();

router.get('/',  homeController.index);
router.get('/about', (req, res)=>{
    res.render('about')
})
router.use('/cube', cubeController)

module.exports = router;