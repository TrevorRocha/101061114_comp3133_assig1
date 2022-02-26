const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "You Must Enter A Username."],
        unique: [true, "Username Is Already Taken."],
        trim: true,
    },
    firstname: {
        type: String,
        required: [true, "You Must Enter Your First Name."],
        trim: true,
    },
    lastname: {
        type: String,
        required: [true, "You Must Enter Your Last Name."],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "You Must Enter A Password."],
        minlength: 6,
        validate: function(value){
            var PasswordRegex = /^[A-Za-z0-9#$&_]+$/
            return PasswordRegex.test(value);
        },
    },
    email: {
        type: String,
        required: [true, "You Must Enter A Email."],
        unique: [true, "Email Is Already Taken"],
        trim: true,
        validate: function(value){
           var EmailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
           return EmailRegex.test(value);
        },
    },
    type: {
        type: String,
        required: true,
        enum: ['admin', 'customer'],
        trim: true,
    },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;