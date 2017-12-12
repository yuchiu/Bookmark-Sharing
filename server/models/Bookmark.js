var mongoose = require('mongoose')

var BookmarkSchema = new mongoose.Schema({
    profile: {type:String, default:''}, //ID of the profile who posted the bookmark
    url: {type:String, trim:true, default:''},
    title: {type:String, trim:true, default:''},
    description: {type:String, trim:true, default:''},
    image: {type:String, default:''},
    timestamp: {type:Date, default:Date.now},
})

module.exports = mongoose.model('BookmarkSchema', BookmarkSchema)