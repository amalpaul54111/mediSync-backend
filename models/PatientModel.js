var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PatientSchema = new Schema({
	'name' : String,
	'phone' : String,
	'aadhaar' : String
},
{
	timestamps:true
}
);

module.exports = mongoose.model('Patient', PatientSchema);
