let mongoose = require ("mongoose");
let enquirySchema = new mongoose.Schema({
    uname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    sub: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("enquirys", enquirySchema);