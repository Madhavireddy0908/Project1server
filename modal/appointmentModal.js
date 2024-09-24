let mongoose = require ("mongoose");
let appointmentSchema = new mongoose.Schema({
    tname: {
        type: String,
        required: true
    },
    pname: {
        type: String,
        required: true
    },
    dname: {
        type: String,
        required: true
    },
    sub: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    msg: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("appointments", appointmentSchema);