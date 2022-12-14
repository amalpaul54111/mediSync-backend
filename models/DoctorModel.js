var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var DoctorSchema = new Schema({
	'name' : String,
	'phone' : String,
	'designation' : String,
	'license' : String
}, {
	timestamps: true
});

module.exports = mongoose.model('Doctor', DoctorSchema);
