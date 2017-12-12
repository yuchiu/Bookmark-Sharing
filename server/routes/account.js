var express = require('express')
var router = express.Router()
var controllers = require('../controllers')
var bcrypt = require('bcryptjs')
var utils = require('../utils')

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