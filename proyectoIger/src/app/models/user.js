const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
    local:{
        email: String,
        password: String,
        type: String
    }
});

userSchema.methods.validatePassword = function (password){
    return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model('User', userSchema);