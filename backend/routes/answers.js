const express = require('express')
const router = express.Router()
const { getAllAnswers,
        getSingleAnswer } = require('../db/queries/answerQueries')

router.get('/', getAllAnswers)
router.get('/:id', getSingleAnswer)

module.exports = router