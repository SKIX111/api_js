let express = require('express');
var router = express.Router();
const db = require('../db/db.json');


/* GET users listing. */
// router.get('/datos', function(req, res, next) {
//   try {
//     res.json(db)
//  } catch (error) {
//     res.status(500),json({error:'el servidor no responde'})
//  }

// });

// router.get('/id', function(req, res, next) {
//   try {
//     res.json(id())
//  } catch (error) {
//     res.status(500).json({error:'el servidor no responde'})
//  }

// });

// router.get('/:id', function(req,res,next){
//   const id =parseInt (req.params.id);
//   const pizza = db.users.find(pizza => pizza.id ==id);
//   if (pizza){
//     res.json(pizza);
//   }else {
//     res.status(404).json({error:'el servidor no responde'})
//   }
// }
// )


router.post('/pos', function(req, res, next) {
  try {
   
   const {id,name ,description ,price } = req.db;
   
 res.json(id() ,name() ,description() ,price())
   users.db({ name ,description ,price })
    
    
 
 

 } catch (error) {
    res.status(500).json({error:'el servidor no responde'})
 }

});
   

module.exports = router;
