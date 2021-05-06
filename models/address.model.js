const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema(
  {fullName: String, 
  addressLine1: String, addressLine2: String, city: String, state: String, country: String, zipCode: String, contactNo: String});

const Address = mongoose.model("Address", AddressSchema)

module.exports = {Address, AddressSchema}