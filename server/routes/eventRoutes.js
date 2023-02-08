const router = require('express').Router()
const {getEvents,updateEvent,createEvent,deleteEvent} = require('../Handlers/eventHandler')

router.get('/',getEvents)
router.post('/',createEvent)
router.put('/:id',updateEvent)
router.delete('/:id',deleteEvent)

module.exports = router