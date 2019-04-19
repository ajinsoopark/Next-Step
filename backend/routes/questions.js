const express = require('express')
const router = express.Router()
const { getAllQuestions,
        getQuestionsByCategory,
        getQuestionsBySearch,
        getSingleQuestion,
        getRandomQuestion,
        getCountofAllQuestions,
      getUserAnsweredQuestionList } = require('../db/queries/questionsQueries')

router.get('/', getAllQuestions)
router.get('/category/:id', getQuestionsByCategory)
router.get('/search/:id',getQuestionsBySearch)
router.get('/random', getRandomQuestion)
router.get('/count', getCountofAllQuestions)
router.get('/:id', getSingleQuestion)
router.get('/answers/:userID', getUserAnsweredQuestionList)



module.exports = router
