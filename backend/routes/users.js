const express = require('express');
const router = express.Router();


const { getAllUsers,
        getSingleUser,
        getSearchUser,
        createUser,
        deleteSingleUser,
        loginUser,
        logoutUser,
        isLoggedIn,
        getLastLoginTime,
        editUser,
        updateLoginTime } = require('../db/queries/usersQueries')



//import require auth functions - password and helper functions
const passport = require("../auth/local");
const { loginRequired } = require("../auth/helper");


//Routes


//placement matter for isLoggedIn
router.get('/log', isLoggedIn);


router.get('/', getAllUsers)
router.get('/:id', getSingleUser)
router.patch('/updatetime/:id', updateLoginTime)
router.patch('/:id', editUser)
router.get('/search/:id',getSearchUser)

router.delete('/:id', deleteSingleUser)

//creditinals logins routes

router.post('/signup', createUser)
router.post('/login', passport.authenticate("local", {}),loginUser);
router.post("/logout", loginRequired, logoutUser);

module.exports = router;
