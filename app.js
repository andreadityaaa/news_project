require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const news = require('./routes/news')
const topic = require('./routes/topic')
const tags = require('./routes/tags')
const err = require('./middleware/err')

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({ extended:true }))
app.use(express.json())

app.use('/news', news)
app.use('/tags', tags)
app.use('/topic', topic)
// app.use(err)

app.listen(PORT, () => {
  console.log('Listening on ' + PORT)
})