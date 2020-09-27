const express = require('express');
const router = express.Router();

const Written = require('../controllers/WrittenController')
const Category = require('../controllers/CategoryController')

router.get('/written',Written.showWritten)
router.get('/written/new',Written.createNewWritten)

router.get('/category',Category.showCategory)
router.get('/category/new',Category.createNewCategory)

module.exports = router;