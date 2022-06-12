const cubes = require('../db.json');
const router = require('express').Router();



router.get('/',  (req, res) => {
    res.render('index', {cubes});
})




module.exports = router;