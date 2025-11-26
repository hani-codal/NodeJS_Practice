const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const mainPath = require('../util/path');

router.use(bodyParser.urlencoded({extended:false}))

router.get('/add-product', (req,res,next)=>{
   res.sendFile(path.join(mainPath ,'views','add-product.html'));
});

router.post("/add-product", (req,res,next)=>{
    console.log('req---',req.body);
    res.redirect("/");
})

module.exports = router;