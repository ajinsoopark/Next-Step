const express = require('express')
const router = express.Router()
const { getAllFeedbacksForOneAnswer,
        addNewFeedback,
        deleteSingleFeedback } = require('../db/queries/feedbacksQueries')

router.get('/:id', getAllFeedbacksForOneAnswer);
router.post('/', addNewFeedback);
router.delete('/:id', deleteSingleFeedback);

module.exports = router;
