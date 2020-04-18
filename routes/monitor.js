const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.status(200).send({status:true, message:"Server is up!"});
    
});

module.exports = router;