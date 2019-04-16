const express = require('express');
const router = express.Router();


const { getAllUsers,
        getSingleUser,
        createUser,
        deleteSingleUser,
        loginUser,
        logoutUser,
        isLoggedIn,
        getLastLoginTime,
        editUser } = require('../db/queries/usersQueries')



//import require auth functions - password and helper functions 
const passport = require("../auth/local");
const { loginRequired } = require("../auth/helper");


//Routes


//placement matter for isLoggedIn
router.get('/log', isLoggedIn);


router.get('/', getAllUsers)
router.get('/:id', getSingleUser)
router.get('/logtimes', getLastLoginTime)
router.patch('/:id', editUser)

router.delete('/:id', deleteSingleUser)

//creditinals logins routes

router.post('/signup', createUser)
router.post('/login', passport.authenticate("local", {}),loginUser);
router.post("/logout", loginRequired, logoutUser);

module.exports = router;
