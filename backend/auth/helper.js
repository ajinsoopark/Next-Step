const bcrypt = require("bcryptjs");


//Compore Hash passwords from FrontEnd to Backend Datebase hash password.
function comparePass(userPass, databasePass) {
  return bcrypt.compareSync(userPass, databasePass);
}


//Create HASHES for the Input - Password.
function createHash(password) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

//If there is no users login in the back than request them to login.
function loginRequired(req, res, next) {
  if (!req.user) {
    res.status(401).json({
      status: "Forbidden - please log in."
    });
    return;
  }
  next();
}

module.exports = {
  comparePass,
  createHash,
  loginRequired
};
