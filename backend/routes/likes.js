const express = require('express')
const router = express.Router()
const { getAllLikesForUser,
    getAllLikesAndInfoForUser,
        addNewLike,
        deleteSingleLike, deleteLikesWithUserID } = require('../db/queries/likesQueries')

router.get('/info/:id',getAllLikesAndInfoForUser)
router.get('/:id', getAllLikesForUser);
router.post('/', addNewLike);
router.delete('/:id', deleteSingleLike);
router.delete('/', deleteLikesWithUserID);


module.exports = router;
