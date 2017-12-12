var Profile = require('../models/Profile')
var Promise = require('bluebird')
var bcrypt = require('bcryptjs')
module.exports={
    find: function(params){
        return new Promise(function(resolve, reject){
            Profile.find(params, function(err, profiles){
                if(err){
                    reject(err)
                    return
                }
                resolve(profiles)
            })
        })
    },
    findById: function(id){
        return new Promise(function(resolve, reject){
            Profile.findById(id, function(err, profile){
                if(err){
                    reject(err)
                    return
                }
                resolve(profile)
            })
        })
    },
    create: function(params){
        return new Promise(function(resolve, reject){

            //hash password
            var password = params.password
            params['password'] = bcrypt.hashSync(password, 10)

            Profile.create(params, function(err, profile){
                if(err){
                    reject(err)
                    return
                }
                resolve(profile)
            })
        })
    }
}