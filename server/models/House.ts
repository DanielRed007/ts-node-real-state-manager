const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    address: {
        street: String,
        postCode: String
    },
    floors: { type: Number, min: 0, max: 5 },
    cost: { type: Number, min: 100000, max: 5000000 },
    description: String,
    rooms: { type: Number, min: 1, max: 10 },
    pool: Boolean,
    backyard: Boolean,
    currency: String,
    city: String,
    owner: {
        name: String,
        phone: String,
        email: String
    },
    visits: mongoose.Schema.Types.ObjectId,
    sellers: mongoose.Schema.Types.ObjectId
});

export default mongoose.model('Product', ProductSchema);