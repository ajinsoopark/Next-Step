const express = require('express')
const router = express.Router()
const { getAllTips,
        getRandomTip } = require('../db/queries/tipsQueries')

router.get('/', getAllTips)
router.get('/random', getRandomTip)

module.exports = router;
