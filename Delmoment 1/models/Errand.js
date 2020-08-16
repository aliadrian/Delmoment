const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ErrandSchema = new Schema({
  user_firstname: {
    type: String
  },
  user_lastname: {
    type: String
  },
  user_email: {
    type: String,
    required: true
  },
  user_address: {
      type: String,
      required: true
  },
  user_title: {
      type: String,
      required: true,
  },
  user_description: {
      type: String,
      required: true
  },
  user_mobile: {
      type: Number,
      required: true
  }
})

module.exports = Errand = mongoose.model('errands', ErrandSchema)