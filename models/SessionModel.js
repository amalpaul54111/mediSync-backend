var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var SessionSchema = new Schema({
	'patient': mongoose.Types.ObjectId,
	'doctor': mongoose.Types.ObjectId,
	'reason' : String,
	'symptoms' : String,
	'identified_issue' : String,
	'opinion': String
}, {
	timestamps: true
});

module.exports = mongoose.model('Session', SessionSchema);
