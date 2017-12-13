var express = require('express')
var router = express.Router()
var controllers = require('../controllers')
var bcrypt = require('bcryptjs')
var utils = require('../utils')

router.get('/:action', function(req, res, next){
    var action = req.params.action
    if(action == "currentuser"){//check for current user
        if( req.session == null){
            res.json({
                confirmation: 'success',
                message: 'user not logged in.'
            })
            return
        }
        if( req.session.token == null){
            res.json({
                confirmation: 'success',
                message: 'user not logged in.'
            })
            return
        }
        var token = req.session.token
        utils.JWT.verify(token, process.env.TOKEN_SECRET)
        .then(function(decode){
            return controllers.profile.findById(decode.id)
        })
        .then(function(profile){
            res.json({
                confirmation: 'success',
                profile : profile
            })
        })
        .catch(function(err){
            res.json({
                confirmation: 'fail',
                message: 'invalid token'
            })
            return
        })
    }
})

router.post('/:action', function (req, res, next) {
    var credentials = req.body
    controllers.profile.find({
            email: credentials.email
        }, true)
        .then(function (profiles) {
            if (profiles.length == 0) {
                res.json({
                    confirmation: 'fail',
                    message: 'Profile not found'
                })
                return
            }
            var profile = profiles[0]
            var passwordCorrect = bcrypt.compareSync(credentials.password, profile.password)
            if (passwordCorrect == false) {
                res.json({
                    confirmation: 'fail',
                    message: 'Incorrect password'
                })
                return
            }
            // create a signed token
            var token = utils.JWT.sign({
                id: profile._id
            }, process.env.TOKEN_SECRET)

            req.session.token = token

            res.json({
                confirmation: 'success',
                profile: profile.summary(),
                token: token
            })
        })
        .catch(function (err) {
            res.json({
                confirmation: 'fail',
                message: err
            })
        })


})
module.exports = router