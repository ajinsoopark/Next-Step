const express = require('express');
const router = express.Router();
const { getAllUsers,
        getSingleUser,
        createUser,
        deleteSingleUser,
        loginUser,
        logoutUser,
        isLoggedIn } = require('../db/queries/usersQueries')

router.get('/', getAllUsers)
router.get('/:id', getSingleUser)
router.post('/', createUser)
router.delete('/:id', deleteSingleUser)

module.exports = router;
