const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: "Name is required"
  },
  addressLine1: {
    type: String,
    required: "addressLine1 is required"
  },
  addressLine2: {
    type: String,
    required: "addressLine2 is required"
  },
  city: {
    type: String,
    required: "city is required"
  },
  state: {
    type: String,
    required: "state is required"
  },
  country: {
    type: String,
    required: "country is required"
  },
  zipCode: {
    type: String,
    required: "zipCode is required"
  },
  contactNo: {
    type: String,
    required: "contactNo is required"
  },
}, 
{timestamps: true})
const Address = mongoose.model("Address", AddressSchema)

module.exports = {Address, AddressSchema}