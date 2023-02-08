const router = require('express').Router()
const {getBookings,deleteBooking,createBooking} = require('../Handlers/bookingHandler')

router.get('/',getBookings)
router.post('/',createBooking)
router.delete('/:id',deleteBooking)

module.exports = router