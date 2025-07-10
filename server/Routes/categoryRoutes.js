const { getAllCategory, getMyCategory, deleteCategory, updateCategory, createCategory } = require('../controllers/CategoryControllers')
const express = require('express')
const router = express.Router()



router.get('/', getAllCategory)
router.get('/:slug', getMyCategory)
router.post('/', createCategory)
router.put('/:slug', updateCategory)
router.delete('/:slug', deleteCategory)


module.exports = router;