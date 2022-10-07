
const { Schema, model, Types } = require('mongoose');


const roomSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    city: { type: String, required: true },
    beds: { type: Number, required: true, min: 1, max: 8 },
    price: { type: Number, required: true, min: 0.01, max: 999999 },
    imgUrl: { type: String },
    facilities: { type: [Types.ObjectId], default: [], ref: 'Facility' }
});

const Room = model('Room', roomSchema);

module.exports = Room;