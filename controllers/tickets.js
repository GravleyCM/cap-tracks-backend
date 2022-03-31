import { Ticket } from '../models/user.js'

function index(req, res) {
  Ticket.find({})
  .populate('owner')
  .then(tickets => {
    res.json(tickets)
  })
  .catch(err => {
    res.json(err)
  })
}

export {
  index
}