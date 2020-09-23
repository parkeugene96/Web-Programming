const auth = require('../middleware/auth');
const {Event, validate} = require('../models/event');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//Gets all Events
router.get('/', async (req, res) => {
  const events = await Event.find().sort('name');
  res.send(events);
});

//Adds New Event
router.post('/', auth, async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let event = new Event({ 
      name: req.body.name,
      semester: req.body.semester,
      year: req.body.year,
      detail: req.body.detail,
      start: req.body.start,
      end: req.body.end,
      location: req.body.location 
    });
  event = await event.save();
  
  res.send(event);
});

//Updates Events
router.put('/:id', auth, async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const event = await Event.findByAndUpdate(req.params.id, 
    {
        name: req.body.name,
        semester: req.body.semester,
        year: req.body.year,
        detail: req.body.detail,
        start: req.body.start,
        end: req.body.end,
        location: req.body.location  
    }, {new: true});

  if (!event) return res.status(404).send('The Event with the given ID was not found.');
  
  res.send(event);
});

//Deletes Events
router.delete('/:id', auth, async (req, res) => {
  const event = await Event.findByIdAndRemove(req.params.id);

  if (!event) return res.status(404).send('The Event with the given ID was not found.');

  res.send(event);
});

//Gets Events by ID
router.get('/:id', async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (!event) return res.status(404).send('The Event with the given ID was not found.');

  res.send(event);
});

module.exports = router;