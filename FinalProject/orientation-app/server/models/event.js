const Joi = require('joi');
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  semester: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  year: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 4
  },
  detail: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  start: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  end: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  location: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  }
});

const Event = mongoose.model('Event', eventSchema);

function validateEvent(event) {
  const schema = {
    name: Joi.string().min(1).required(),
    semester: Joi.string().min(3).max(50).required(),
    year: Joi.string().min(4).max(4).required(),
    detail: Joi.string().min(5).max(255),
    start: Joi.string().min(5).max(50).required(),
    end: Joi.string().min(5).max(50).required(),
    location: Joi.string().min(5).max(255).required()
  };

  return Joi.validate(event, schema);
}

exports.eventSchema = eventSchema;
exports.Event = Event; 
exports.validate = validateEvent;