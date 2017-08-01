const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
    note: {
        type: String,
        trim: true,
        required: true
    },
}, { timestamps: true});

module.exports = mongoose.model('Note', noteSchema);