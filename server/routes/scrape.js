var express = require('express')
var router = express.Router()

router.get('/',function(req, res, next){
    var url = req.query.url
    if(url == null){
        res.json({
            confirmation:'fail',
            message: 'Please enter a valid url'
        })
        return 
    }
})

module.exports= router