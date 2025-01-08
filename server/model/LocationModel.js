const mongoose = require("mongoose");

const LocationModel = new mongoose.Schema({
    LocationName: { type: String, required: true },
    BlockDetails: { type: String, required: true },
    DetailedAddress: { type: String, required: false}
})

const Location = new mongoose.model("Location", LocationModel);
module.exports = Location