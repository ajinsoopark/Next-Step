const express = require('express');
const router = express.Router();


const { getAllUsers,
        getSingleUser,
        createUser,
        deleteSingleUser,
        loginUser,
        logoutUser,
        isLoggedIn } = require('../db/queries/usersQueries')



//import require auth functions - password and helper functions 
const passport = require("../auth/local");
const { loginRequired } = require("../auth/helper");


//Routes
router.get('/', getAllUsers)
router.get('/:id', getSingleUser)
router.post('/', createUser)
router.delete('/:id', deleteSingleUser)

//creditinals logins routes
router.get("/log", isLoggedIn);

router.post('/sign_up', createUser)
router.post("/login", passport.authenticate("local", {}),loginUser);

router.post("/logout", loginRequired, logoutUser);

module.exports = router;
