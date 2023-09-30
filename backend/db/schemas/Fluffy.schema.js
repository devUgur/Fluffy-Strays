const mongoose = require('mongoose');

const fluffySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        //unique: true,
        //trim: true
    },
    gender: {
        type: String,
    },
    characteristics: {
        type: [String], // Änderung: characteristics sollte ein Array von Strings sein
        default: [],
    },
    description: {
        type: String,
    },
    images: {
        type: [String], // Änderung: images sollte ein Array von Dateinamen (Strings) sein
        default: [],
    },
    receivedAt: {
        type: String,
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
});

const Fluffy = mongoose.model('Fluffy', fluffySchema);

module.exports = Fluffy;
