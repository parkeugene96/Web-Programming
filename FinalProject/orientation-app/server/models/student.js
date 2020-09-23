const Joi = require('joi');
const mongoose = require('mongoose');

const Student = mongoose.model('Student', new mongoose.Schema({
  pantherid: {
    type: String,
    required: true,
    minlength: 9,
    maxlength: 9,
    unique: true
  },
  firstname: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50
  },
  lastname: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50
  },
  department: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  level: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  campus: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  degree: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  college: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 225
  },
  year: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 4
  },
  checkin: {
      type: Boolean
  }
}));

function validateStudent(student) {
  const schema = {
    pantherid: Joi.string().min(9).max(9).required(),
    firstname: Joi.string().min(1).max(50).required(),
    lastname: Joi.string().min(1).max(50).required(),
    department: Joi.string().min(5).max(50).required(),
    level: Joi.string().min(5).max(50).required(),
    campus: Joi.string().min(5).max(50).required(),
    degree: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    college: Joi.string().min(5).max(255).required(),
    year: Joi.string().min(4).max(4).required(),
    checkin: Joi.boolean()
  };
  return Joi.validate(student, schema);
}

exports.Student = Student; 
exports.validate = validateStudent;