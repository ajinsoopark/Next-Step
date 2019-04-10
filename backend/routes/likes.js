const express = require('express')
const router = express.Router()
const { addNewLike,
deleteSingleLike } = require('../db/queries/likesQueries')

router.post('/', addNewLike);
router.delete('/:id', deleteSingleLike);

module.exports = router
