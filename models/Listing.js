const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    listing_id: {
        type: String,
        required: true,
        trim: true,
    },
    listing_title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    postal_code: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
        validate: function(value){
           var EmailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
           return EmailRegex.test(value);
        },
    },
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;