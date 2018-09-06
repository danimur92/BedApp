const mongoose = require('mongoose');
const _ = require('lodash');

// User Schema
var PatientSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	dateOfBirth: {
		type: String,
		required: true,
	},
	sex: {
		// true = male
		// false = female
		type: Boolean,
		required: true,
		default: true
	},
	room: {
		type: String,
		required: true,
		default: 'noroom'
	}
});

var Patient = mongoose.model('Patient', PatientSchema);
module.exports = {Patient};
