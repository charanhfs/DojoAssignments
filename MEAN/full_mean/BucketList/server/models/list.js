const mongoose = require('mongoose');
const { Schema } = mongoose;

const listSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 10
  },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    buddy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
   accomplished: {
    type: Boolean,
    default: 'false'
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('List', listSchema);