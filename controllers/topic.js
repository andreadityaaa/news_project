const { News, Topic, Tags } = require ('../models')

class TopicController {
  static read (req, res, next) {
    Topic.findAll({
        order: [['id', 'ASC']],
        include: [ News ]
    })
    .then(data => {
        if (!data){
            throw createError(400, "not found!")
        }
        res.status(200).json(data)
    })
    .catch(err => {
        next(err)
    })
}

  static readId (req, res, next) {
    Topic.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

  static add (req, res, next) {
    const { title } = req.body
    
    Topic.create({
      title
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

  static edit (req, res, next) {
    const { title } = req.body
    
    Topic.update({
      title
      }, { where: {
        id: req.params.id
      }, returning: true
    })
      .then(data => {
        res.status(200).json({
          data,
          message: `Success Edit Topic`
        })
      })
      .catch(err => {
        next(err)
      })
  }
  
  static delete (req, res, next) {
    Topic.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        console.log('<<<<<<<<<')
        if (!data) {
          res.status(200).json({
            message: `Topic Not Found`
          })
        } else {
          res.status(200).json({
            message: `Topic Success to Delete`
          })
        }
      })
      .catch(err => {
        console.log(err)
        next(err)
      })
  }
}

module.exports = TopicController