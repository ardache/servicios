const mongoose = require("mongoose");
require('mongoose-type-email');
mongoose.SchemaTypes.Email.defaults.message = 'direccion de correo invalida'
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {type:String, required: true},
  password: {type:String, required: true},
  email : {type: mongoose.SchemaTypes.Email, required: true},
  balance : {type: Number, default: 250},
  position: {type: String, enum: ["Director", "Ejecutivo", "Becario"], default: "No definido"},
  fullname: {type:String, required: true},
  beneficiario: {type:String, required: true},
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model("User", userSchema);

module.exports = User;