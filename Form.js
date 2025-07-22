const mongoose = require('mongoose');

const FieldSchema = new mongoose.Schema({
  label: String,
  name: String,
  type: String,
  options: [String],
  required: Boolean,
});

const FormSchema = new mongoose.Schema({
  title: String,
  description: String,
  fields: [FieldSchema],
});

module.exports = mongoose.model('Form', FormSchema);
