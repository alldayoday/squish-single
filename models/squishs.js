import mongoose from 'mongoose'

const Schema = mongoose.Schema

const squishSchema = new Schema({
  name: String,
  desc: String,
  sizes: [String],
  categories: [String],
  img: String,
})

const Squish = mongoose.model('Squish', squishSchema)

export {
  Squish
}