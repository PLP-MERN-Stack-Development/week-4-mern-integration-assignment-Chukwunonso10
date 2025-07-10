const express = require('express')
const router = express.Router()
const { login, getAllUsers, getMyuser, updateUser, deleteUser , register} = require('../controllers/authControllers')
const authenticate = require('../middlewares/authenticate')



router.get('/', authenticate, getAllUsers)
router.get('/:id',authenticate, getMyuser)
router.post('/register', register)
router.post('/login', login)
router.delete('/:id',authenticate, deleteUser)
router.put('/:id',authenticate, updateUser)

module.exports = router;