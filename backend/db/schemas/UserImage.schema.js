const mongoose = require('mongoose');

const userImageSchema = new mongoose.Schema({
    user_id: String,
    data: Buffer,
    contentType: String,
});

const UserImage = mongoose.model('UserImage', userImageSchema);

module.exports = UserImage;