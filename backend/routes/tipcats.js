const express = require('express')
const router = express.Router()
const { getAllTipcats } = require('../db/queries/tipcatsQueries')

router.get('/', getAllTipcats);


module.exports = router;