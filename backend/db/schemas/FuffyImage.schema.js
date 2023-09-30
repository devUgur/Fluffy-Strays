const mongoose = require('mongoose');

const fluffyImageSchema = new mongoose.Schema({
    fluffy_id: String,
    data: Buffer,
    contentType: String,
});

const FluffyImage = mongoose.model('FluffyImage', fluffyImageSchema);

module.exports = FluffyImage;