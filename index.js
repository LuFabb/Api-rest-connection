//import mongoose
const mongoose = require('mongoose')

//connect with mongodb to database with mongoose - for this project you don't see the URL for 
//privacy reasons
mongoose.connect('')

//crear a model
const User = mongoose.model('User', {
  username: String,
  edad: Number,
})

const crear = async () => {
  const user = new User({ username: 'chanchito', edad: 15 })
  const saveUser = await user.save()
  console.log(saveUser)
}

crear()
