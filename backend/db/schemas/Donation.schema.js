const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    donor: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    fluffy: {
        type: Object,
        default: {}
    },
    comment: {
        type: String,
    },

    donatedOn: {
        type: Date,
        default: Date.now
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
});

const Donation = mongoose.model('Fluffy', donationSchema);

module.exports = Donation;