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
        getAllAnswersWithQuestionsLikes } = require('../db/queries/answerQueries')

router.get('/', getAllAnswers);
router.get('/user/:id', getAllQandAForOneUser);
router.get('/count/user/:id', getCountAnswersofOneUser);
router.get('/:id/question/',getAllAnswersWithTheQuestion)
router.get('/byuser/byquestion', getAnswerByQuestionByUser);
//DO WE NEED THE ROUTE DOWN BELOW? - GET SINGLE ANSWER?
router.get('/:id', getSingleAnswer);

router.get('/withlikes/:id', getAllAnswersWithQuestionsLikes)

router.get('/', getAllAnswers);
router.post('/', addNewAnswer);
router.patch('/:id', editSingleAnswer);
router.delete('/:id', deleteSingleAnswer);


module.exports = router;
