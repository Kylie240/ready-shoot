const mongoose = require("mongoose")

const InquirySchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required:true},
    address: {type: String, required: true},
    email: {type: String, required: true },
    city: {type: String, required: true },
    age: {type: String, required: true },
    phone: {type: String, required: true },
    zipcode: {type: String, required: true },
    startdate: {type: String, required: true},
    starttime: {type: String, required:true},
    enddate: {type: String, required: true},
    endtime: {type: String, required: true },
    pickup: {type: String, required: true },
    dropoff: {type: String, required: true },
    userID: {type: String, required: true },
    cameraID: {type: String, required: true },
})

const InquiryModel = mongoose.model("inquiries", InquirySchema)

module.exports = InquiryModel