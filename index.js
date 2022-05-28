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

//crear()

const buscarTodo = async () => {
  const users = await User.find()
  console.log(users)
}

//buscarTodo()

const buscar = async () => {
  const user = await User.find({ username: 'chanchito feliz' })
  console.log(user)
}

//buscar()

const buscarUno = async () => {
  const user = await User.findOne({ username: 'chanchito feliz' })
  console.log(user)
}

//buscarUno()


const actualizar = async () => {
  const user = await User.findOne({ username: 'chanchito feliz '})
  console.log(user)
  user.edad = 30
  await user.save()
}

//actualizar()

const eliminar = async () => {
  const user = await User.findOne({ username: 'chanchito triste' })
  console.log(user)
  if (user) {
    await user.remove()
  }
}

eliminar()


