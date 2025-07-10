const { getAllPost, getmypost, updatepost, deletepost, createpost, addComment } = require('../controllers/PostControllers')
const express = require('express')
const authenticate = require('../middlewares/authenticate')
const router = express.Router()

//
router.get('/', getAllPost)
router.get('/:slug', getmypost)
router.post('/', authenticate,  createpost)
router.put('/:slug', updatepost)
router.delete('/:slug', deletepost)
router.delete('/:slug/comments', addComment)

module.exports = router;