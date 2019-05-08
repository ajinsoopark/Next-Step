const express = require('express')
const router = express.Router()
const { getAllAnswers,
        getSingleAnswer,
        getAllQandAForOneUser,
        getCountAnswersofOneUser,
        addNewAnswer,
        editSingleAnswer,
        deleteSingleAnswer,
        getAllAnswersWithTheQuestion,
        getAnswerByQuestionByUser,
        getAllAnswersWithQuestionsLikes,
        getAllUserProgress,
        getAnswersByCategoryAndOld,
        getAnswersByCategoryAndNew,
        getAnswersByCategoryAndMostPop,
        getAnswersByCategoryAndLeastPop,
        getAnswersByLeastPop,
        getAnswersByNewest,
        getAnswersByOldest,
        getAnswersByMostPop,
       getSearchResult} = require('../db/queries/answerQueries')

//Answers with no sorting method
router.get('/search/:search', getSearchResult)

router.get('/withlikes/:id', getAllAnswersWithQuestionsLikes)
//Answers for user based on category, popularity, or time
router.get('/category/old/:userId/:catId', getAnswersByCategoryAndOld)
router.get('/category/new/:userId/:catId', getAnswersByCategoryAndNew)
router.get('/category/popular/:userId/:catId', getAnswersByCategoryAndMostPop)
router.get('/category/unpopular/:userId/:catId', getAnswersByCategoryAndLeastPop)
//Answers for user based on popularity or time
router.get('/old/:id', getAnswersByOldest)
router.get('/new/:id', getAnswersByNewest)
router.get('/popular/:id', getAnswersByMostPop)
router.get('/unpopular/:id', getAnswersByLeastPop)

router.get('/', getAllAnswers);
router.get('/progress',getAllUserProgress);
router.get('/user/:id', getAllQandAForOneUser);
router.get('/count/user/:id', getCountAnswersofOneUser);
router.get('/question/', getAllAnswersWithTheQuestion)
router.get('/byuser/byquestion', getAnswerByQuestionByUser);
//DO WE NEED THE ROUTE DOWN BELOW? - GET SINGLE ANSWER?
router.get('/:id', getSingleAnswer);


router.get('/', getAllAnswers);
router.post('/', addNewAnswer);
router.delete('/:id', deleteSingleAnswer);
router.patch('/:id', editSingleAnswer);


module.exports = router;
