
const cubes = require('../db.json')
const fs = require('fs/promises');
const path = require('path');

exports.save =(cube)=>{
    cubes.push(cube);
    fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes, " ", 4), {encoding: 'utf-8'})

}

//exports.getOne = (cubeId)=> cubes[cubeId]