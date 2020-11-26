const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise;

const userSchema = new Schema({
    firstname: {type:String, unique: false, required:true},
    lastname: {type:String, unique: false, required:true},
    email: {type:String, unique: true, required:true},
    phonenumber: {type:Number, unique: true, required:true},
    password: {type:String, unique:false, required: true}
})

userSchema.methods = {    
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}

userSchema.pre('save', function(next){
    if(!this.password){
        console.log('models/user.js ======== NO PASSWORD PROVIDED ==========')
        next()
    }else{
        console.log('models/user.js  hashPassword in pre save');
        this.password = this.hashPassword(this.password)
        next()
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User