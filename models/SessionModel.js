var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var SessionSchema = new Schema({
	'reason' : String,
	'symptoms' : Array,
	'identified_issue' : String,

}, {
	timestamps: true
});

module.exports = mongoose.model('Session', SessionSchema);
