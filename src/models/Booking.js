const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,

    user: {
        type: mongoose.Schema.Types.ObjectId, //Verificando qual usuario criou pelo ID
        ref: 'User'
    },

    spot: {
        type: mongoose.Schema.Types.ObjectId, //Verificando qual usuario criou pelo ID
        ref: 'Spot'
    }

})

module.exports = mongoose.model('Booking', BookingSchema);