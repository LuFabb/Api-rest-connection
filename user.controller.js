const Users = require('./User')

const User = {
  get: async(req, res) => {
    res.status(200).send('este es un chanchito')
  },
  list: async(req, res) => {
    const user = await Users.find()
    res.status(200).send(users)
  },
  create: async(req, res) => {
    console.log(req.body)
    res.status(201).send('creando un chanchito')
  },
  update: async(req, res) => {
    res.status(204).send('actualizando chanchito')
  },
  destroy: async(req, res) => {
    res.status(204).send('eliminando un chanchito :(')
  }
}

module.exports = User