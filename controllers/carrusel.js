const Carrusel = require('../models/carrusel');
const { default: mongoose } = require('mongoose');

exports.create = async (req, res) => {
  try {
    const newCarrusel = await new Carrusel(req.body).save();
    res.json(newCarrusel);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.read = async (req, res) => {
  let carrusel = await Carrusel.find({}).exec();
  res.json(carrusel);
};
