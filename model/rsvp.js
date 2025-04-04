const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const rsvpSchema = new Schema({
    rsvp: {type: String, required:[true, 'RSVP is required']},
    user: {type: Schema.Types.ObjectId, ref: 'User', required:[true, 'RSVP is required']},
    event: {type: Schema.Types.ObjectId, ref: 'event', required:[true, 'RSVP is required']}
});

//collection name is rsvps in database
module.exports = mongoose.model('Rsvp', rsvpSchema);