const router = require('express').Router()
const {generateTicket,getTickets,deleteTicket} = require('../Handlers/generateTickets')

router.post('/generate',generateTicket)
router.get('/',getTickets)
router.delete('/:id',deleteTicket)
module.exports = router