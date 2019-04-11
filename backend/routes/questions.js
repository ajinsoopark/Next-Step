const express = require('express')
const router = express.Router()
const { getAllQuestions,
        getQuestionsByCategory,
        getSingleQuestion,
        getRandomQuestion,
        getCountofAllQuestions } = require('../db/queries/questionsQueries')

router.get('/', getAllQuestions)
router.get('/category/:id', getQuestionsByCategory)
router.get('/random', getRandomQuestion)
router.get('/count', getCountofAllQuestions)
router.get('/:id', getSingleQuestion)

module.exports = router
