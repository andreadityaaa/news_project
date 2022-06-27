const route = require('express').Router()
const TopicController = require('../controllers/topic.js')

route.get('/', TopicController.read)
route.get('/:id', TopicController.readId)
route.post('/', TopicController.add)
route.put('/:id', TopicController.edit)
route.delete('/:id', TopicController.delete)

module.exports = route