const auth = require('../middleware/auth');
const {Student, validate} = require('../models/student'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//Get all student records
router.get('/', auth, async (req, res) => {
  const students = await Student.find().sort('name');
  res.send(students);
});

//Add new Student
router.post('/', auth, async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let student = new Student({ 
    pantherid: req.body.pantherid,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    department: req.body.department,
    level: req.body.level,
    campus: req.body.campus,
    degree: req.body.degree,
    email: req.body.email,
    college: req.body.college,
    year: req.body.year,
    checkin: req.body.checkin
  });
  student = await student.save();
  
  res.send(student);
});

//Update student information
router.put('/:id', auth, async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const student = await Student.findByIdAndUpdate(req.params.id,
    { 
        pantherid: req.body.pantherid,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        department: req.body.department,
        level: req.body.level,
        campus: req.body.campus,
        degree: req.body.degree,
        email: req.body.email,
        college: req.body.college,
        year: req.body.year,
        checkin: req.body.checkin
    }, { new: true });

  if (!student) return res.status(404).send('The student with the given ID was not found.');
  
  res.send(student);
});

//Delete student
router.delete('/:id', auth, async (req, res) => {
  const student = await Student.findByIdAndRemove(req.params.id);

  if (!student) return res.status(404).send('The student with the given ID was not found.');

  res.send(student);
});

//Get student record by ID
router.get('/:id', auth, async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (!student) return res.status(404).send('The student with the given ID was not found.');

  res.send(student);
});

module.exports = router; 