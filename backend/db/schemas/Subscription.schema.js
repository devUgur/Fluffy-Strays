const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    subscriber: {
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

    subscribedOn: {
        type: Date,
        default: Date.now
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
});

const Subscription = mongoose.model('Fluffy', subscriptionSchema);

module.exports = Subscription;