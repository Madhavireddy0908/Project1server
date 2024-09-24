let mongoose = require ("mongoose");
let offerSchema = new mongoose.Schema({
    oname: {
        type: String,
        required: true
    },
    oprice: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model("offers", offerSchema);