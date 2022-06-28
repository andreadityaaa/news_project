const { News, Topic, Tags } = require ('../models')

class NewsController {
  static read (req, res, next) {
    News.findAll({
        order: [['id', 'ASC']],
        include: [ Tags, Topic ]
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
    News.findOne({
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

  static readByStatus (req, res, next) {
    News.findAll({
      include: [ Topic, Tags ],
      where: {
        status: req.params.status
      }
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

  static readByTopic (req, res, next) {
    News.findAll({
      include: [ Topic, Tags ],
      where: {
        TopicId: req.params.TopicId
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
    const { title, description, constraint, bodyText, author, status } = req.body
    
    News.create({
      title,
      description,
      constraint,
      bodyText,
      author,
      status
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

  static edit (req, res, next) {
    const { title, description, constraint, bodyText, author, status } = req.body
    
    News.update({
      title,
      description,
      constraint,
      bodyText,
      author,
      status
      }, { where: {
        id: req.params.id
      }, returning: true
    })
      .then(data => {
        res.status(200).json({
          data,
          message: `Success Edit News`
        })
      })
      .catch(err => {
        next(err)
      })
  }
  
  static delete (req, res, next) {
    News.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        console.log('<<<<<<<<<')
        if (!data) {
          res.status(200).json({
            message: `News Not Found`
          })
        } else {
          res.status(200).json({
            message: `News Success to Delete`
          })
        }
      })
      .catch(err => {
        console.log(err)
        next(err)
      })
  }
}

module.exports = NewsController