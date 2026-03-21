const mongoose = require('mongoose');

const cargoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Cargo', cargoSchema);