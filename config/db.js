const mongoose = require('mongoose')

const connectDB = () => {
  mongoose.connect('mongodb://localhost:27017/mytodo').then(() => {
    console.log('connect')
  }).catch((e) => {
    console.log('can not connect')
  })
}

module.exports = connectDB