const express = require('express')
const router = express.Router()
const { getAllLikesForUser,
        addNewLike,
        deleteSingleLike } = require('../db/queries/likesQueries')

router.get('/:id', getAllLikesForUser);
router.post('/', addNewLike);
router.delete('/:id', deleteSingleLike);

module.exports = router;
