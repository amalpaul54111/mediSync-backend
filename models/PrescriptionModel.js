var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PrescriptionSchema = new Schema({
	'medicines' : Array
},
{
	timestamps:true
});

module.exports = mongoose.model('Prescription', PrescriptionSchema);
