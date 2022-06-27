const route = require('express').Router()
const NewsController = require('../controllers/news.js')

route.get('/', NewsController.read)
route.get('/:id', NewsController.readId)
route.post('/', NewsController.add)
route.put('/:id', NewsController.edit)
route.delete('/:id', NewsController.delete)

module.exports = route