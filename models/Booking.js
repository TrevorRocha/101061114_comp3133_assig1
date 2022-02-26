const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    listing_id:{
        type: String,
        required: true,
        trim: true,
    },
    booking_id:{
        type: String,
        required: true,
        trim: true,
    },
    booking_date:{
        type: Date,
        required: true,
        default: Date.now,
        trim: true,
    },
    booking_start:{
        type: Date,
        required: true,
        trim: true,
    },
    booking_end:{
        type: Date,
        required: true,
        trim: true,
    },
    username:{
        type: String,
        required: true,
        trim: true,
    },
});

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;