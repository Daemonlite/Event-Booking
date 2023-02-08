const router = require('express').Router()
const {getUsers,register,loginUser,updateUserInfo,deleteUser} = require('../Handlers/userHandler')

router.get('/',getUsers)
router.post('/register',register)
router.post('/login',loginUser)
router.delete('/:id',deleteUser)

module.exports = router
