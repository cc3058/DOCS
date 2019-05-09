const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;


// User Schema
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String,
    first_name: {type: String, unique: false},
    last_name: {type: String, unique: false},
    role: {type: String, default: "member"},
}, { timestamps: true });


userSchema.statics.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.isAdmin = function() {
    return (this.role === "member");
};
userSchema.methods.isStudent = function() {
    return (this.role === "author");
};
userSchema.methods.isTeacher = function() {
    return (this.role === "teacher");
};

module.exports = mongoose.model('User', userSchema);
