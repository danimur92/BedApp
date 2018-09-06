const express = require('express');
const _ = require('lodash');
const router = express.Router();

var {Patient} = require('./../server/models/patient.js');

/*
    GET /app/addpatient -> go to addPatient page
*/
router.get('/app/addpatient', (req, res) => {
    res.render('addpatient', {pageTitle: "Add patient"});
});

/*
    GET /app/getpatients  -> get a JSON with all patients
*/
router.get('/app/getpatients', (req, res) => {
    Patient.find({}).then((patients) => {
        res.status(200).send(patients);
    }).catch((err) => {
        console.log(err);
        res.status(400).send();
    });
});

module.exports = router;
