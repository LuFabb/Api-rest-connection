const mongoose = require('mongoose')

const User = mongoose.model('User', {
  name: { type: String, required: true, minLegth: 3},
  lastname: { type: String, required: true, minLegth: 3},
})

module.exports = User