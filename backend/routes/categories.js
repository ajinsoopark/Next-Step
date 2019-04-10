const express = require('express')
const router = express.Router()
const { getAllCategories } = require('../db/queries/categoriesQueries')

router.get('/', getAllCategories);


module.exports = router;
