const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  idpedido: {
    type: Number,
    required: true,
  },

  descpedido: {
    type: String,
    required: true

  },
  preciopedido: {
    type: Number,
    required: true
  },

  fechapedido: {
    type: String,
    required: true

  },
  productospedido: {
    type: String,
    required: true
  },
  clientepedido: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);