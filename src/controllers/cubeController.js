
const router = require('express').Router();

const cubeServic = require('../service/cubeService')
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

   
   
  cubeServic.save(cube)
        .then(()=>{
            res.redirect('/')
        })
        .catch(err => {
            res.status(400).send(err)
        })


});

router.get('details/:id', (req, res)=>{
 

    res.render('details')

});

module.exports = router;