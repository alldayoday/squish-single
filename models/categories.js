import mongoose from 'mongoose'

const Schema = mongoose.Schema

const categSchema = new Schema({
  name: String,
  squishs: [{ type: Schema.Types.ObjectId, ref: "Squish" }],
})

const Categ = mongoose.model('Categ', categSchema)

export {
  Categ
}