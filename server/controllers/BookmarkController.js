var Bookmark = require('../models/Bookmark')
var Promise = require('bluebird')
var superagent = require('superagent')
var utils = require('../utils')

module.exports = {
    find: function (params) {
        return new Promise(function (resolve, reject) {
            Bookmark.find(params, function (err, bookmarks) {
                if (err) {
                    reject(err)
                    return
                }
                resolve(bookmarks)
            })
        })
    },
    findById: function (id) {
        return new Promise(function (resolve, reject) {
            Bookmark.findById(id, function (err, bookmark) {
                if (err) {
                    reject(err)
                    return
                }
                resolve(bookmark)
            })
        })
    },
    create: function (params) {
        return new Promise(function (resolve, reject) {
            superagent
                .get(params.url)
                .query(null)
                .set('Accept', 'text/html')
                .end(function (err, response) {
                    if (err) {
                        reject(err)
                        return
                    }
                    var html = response.text
                    var props = ['og:title', 'og:description', 'og:image', 'og:url']
                    var metaData = utils.Scraper.scrape(html, props)

                    Bookmark.create(metaData, function (err, bookmark) {
                        if (err) {
                            reject(err)
                            return
                        }
                        resolve(bookmark)
                    })
                })
        })
    }
}