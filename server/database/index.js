/* @make connection to the database */

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const uri = ''

mongoose.connect(uri).then(
    () => {
        console.log('Connected to Mongo')
    },
    err => {
        console.log('error connecting to Mongo: ')
        console.log(err)
    }
)

module.exports = mongoose.connection