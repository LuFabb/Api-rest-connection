const User = {
  get: (req, res) => {
    res.status(200).send('este es un chanchito')
  },
  list: (req, res) => {
    res.status(200).send('Hola Chanchito!')
  },
  create: (req, res) => {
    res.status(201).send('creando un chanchito')
  },
  update: (req, res) => {
    res.status(204).send('actualizando chanchito')
  },
  destroy: (req, res) => {
    res.status(204).send('eliminando un chanchito :(')
  }
}

module.exports = User