const mongoose = require ('mongoose')

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],

    user: {
        type: mongoose.Schema.Types.ObjectId, //Verificando qual usuario criou pelo ID
        ref: 'User'
    }

})

module.exports = mongoose.model('Spot', SpotSchema);