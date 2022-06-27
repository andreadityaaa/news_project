const route = require('express').Router()
const TagsController = require('../controllers/tags.js')

route.get('/', TagsController.read)
route.get('/:id', TagsController.readId)
route.post('/', TagsController.add)
route.put('/:id', TagsController.edit)
route.delete('/:id', TagsController.delete)

module.exports = route