const mongoose = require('mongoose');

const carruselSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: 'Title is required',
      minlength: [2, 'Too short'],
      maxlength: [100, 'Too long'],
    },
    description: {
      type: String,
    },
    img: {
      type: String,
      unique: true,
      lowercase: true,
    },
    link: {
      type: String,

      lowercase: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model('carrusel', carruselSchema);
