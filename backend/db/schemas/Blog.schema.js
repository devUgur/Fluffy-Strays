const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    donor: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    comments: {
        type: Array,
    },

    likes: {
        type: Number,
    },

    reads: {
        type: Number,
    },

    createdOn: {
        type: Date,
        default: Date.now
    },
});

const Donation = mongoose.model('Fluffy', donationSchema);

module.exports = Donation;