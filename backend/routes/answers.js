const express = require('express')
const router = express.Router()
const { getAllAnswers,
        getSingleAnswer,
        getAllQandAForOneUser,
        getCountAnswersofOneUser,
        addNewAnswer,
        editSingleAnswer,
        deleteSingleAnswer,
        getAllAnswersWithTheQuestion } = require('../db/queries/answerQueries')

router.get('/', getAllAnswers);
router.get('/user/:id', getAllQandAForOneUser);
router.get('/count/user/:id', getCountAnswersofOneUser);
router.get('/:id/question/',getAllAnswersWithTheQuestion)
router.get('/:id', getSingleAnswer);

router.get('/', getAllAnswers);
router.post('/', addNewAnswer);
router.patch('/:id', editSingleAnswer);
router.delete('/:id', deleteSingleAnswer);


module.exports = router;
