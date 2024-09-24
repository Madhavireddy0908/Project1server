let mongoose = require ("mongoose");
let doctorSchema = new mongoose.Schema({
    tname: {
        type: String,
        required: true
    },
    dname: {
        type: String,
        required: true
    },
    dqual: {
        type: String,
        required: true
    },
    yoe: {
        type: String,
        required: true
    },
    hos: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("doctors", doctorSchema);