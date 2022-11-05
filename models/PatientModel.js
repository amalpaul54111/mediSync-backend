var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PatientSchema = new Schema({
	'name' : String,
	'phone' : String,
	'aadhaar' : String
});

module.exports = mongoose.model('Patient', PatientSchema);
