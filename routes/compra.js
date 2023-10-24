let express = require('express');
var router = express.Router();
let router = express();
const db = require('../db/db.json');


router.get('/id', function(req, res, next) {

 try {
    res.json(datos)
 } catch (error) {
    res.status(500),json({error:'el servidor noresponde'})
 }
        // const { id, name,description,price} = body;
        
        // if (err) reject(err)
        // console.log(rows);

        // resolve(rows);
        // console.log(rows)
    });
  
    res.render('compra', { title: 'Express' });





module.exports = {
   router
}

 