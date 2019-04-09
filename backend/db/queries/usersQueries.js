const { db } = require('../index');

const authHelpers = require("../../auth/helper");

const getAllUsers = (req, res, next) => {
  db.any("SELECT * FROM users")
    .then(users => {
      res.status(200).json({
        status: "success!",
        users: users,
        message: "got all users!"
      });
    })
    .catch(err => {
      return next(err)
    });
};

const getSingleUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.one('SELECT * FROM users WHERE id=$1', [userId])
  .then(user => {
    res.status(200)
    .json({
      status: "success",
      user: user,
      message: "got one user"
    });
  })
  .catch(err => {
    return next(err)
  })
};


const deleteSingleUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result('DELETE FROM users WHERE id=$1', userId)
  .then(result => {
    res.status(200)
    .json({
      status: "success",
      message: "deleted a single user"
    });
  })
  .catch(err => {
    return next(err)
  })
};

const createUser = (req, res, next) => {
  const hash = authHelpers.createHash(req.body.password);
  db.none(
    "INSERT INTO users (username, first_name, last_name, email,  password_digest) VALUES (${username}, ${first_name}, ${last_name}, ${email}, ${password_digest})",
    { username: req.body.username, first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password_digest: hash }
  )
    .then(() => {
      res.status(200).json({
        message: "Registration successful."
      });
    })
    .catch(err => {
      next(err);
    });
}

const logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).json({ message: "log out success" });
}

const loginUser = (req, res) => {
  res.json(req.user);
}

function isLoggedIn(req, res) {
  let loginUser = req.user
  db.oneOrNone('SELECT * FROM USERS WHERE USERS.username=${params}',{
    params: req.user
  }).then((data)=>{
    if(data){
    res.json({
      username: data.username,
      userID: data.id
    })
  }
  else {
    res.json({
      username: null,
      userID: null
  })}
}
  )
  .catch(err =>{
    console.log(err)
  })
}

module.exports = {
  getAllUsers,
  getSingleUser,
  deleteSingleUser,
  createUser,
  logoutUser,
  loginUser,
  isLoggedIn
};
