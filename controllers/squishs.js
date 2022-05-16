import { Squish } from '../models/squishs.js'

function index(req, res) {
  Squish.find({})
  .then(squishs => {
    res.render('squishs/index', {
      squishs,
      title: "squishhh"
    })
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

// function index(req, res) {
//   Squish.find({})
//   .then(squishs => {
//     res.json(squishs)
//     })
//   .catch(err => {
//     console.log(err)
//     res.json(err)
//   })
// }

function create(req, res) {
  Squish.create(req.body)
  .then(squish => res.json(squish))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

// function show(req, res) {
//   Squish.findById(req.params.id)
//   .then(squish => res.json(squish))
//   .catch(err => {
//     console.log(err)
//     res.json(err)
//   })
// }

function show(req, res) {
  Squish.findById(req.params.id)
  .then(squish => {
    res.render('squishs/show', {
      squish,
      title: "squishhh"
    })
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function update(req, res) {
  Squish.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(squish => res.json(squish))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function deleteSquish(req, res) {
  Squish.findByIdAndDelete(req.params.id)
  .then(squish => res.json(squish))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}
export {
  index,
  create,
  show,
  update,
  deleteSquish as delete,
}
