const express = require('express')
const router = express.Router()
const { getAllLikesForUser,
        addNewLike,
        deleteSingleLike, deleteLikesWithUserID } = require('../db/queries/likesQueries')

router.get('/:id', getAllLikesForUser);
router.post('/', addNewLike);
router.delete('/:id', deleteSingleLike);
router.delete('/', deleteLikesWithUserID);


module.exports = router;
