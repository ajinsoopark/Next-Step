const { db } = require('../index');

const getAllTips = (req, res, next) => {
  db.any("SELECT * FROM tips")
    .then(tips => {
      res.status(200).json({
        status: "success!",
        tips: tips,
        message: "got all tips!"
      });
    })
    .catch(err => {
      return next(err)
    });
};

const getRandomTip = (req, res, next) => {
  db.any('SELECT * FROM tips ORDER BY RANDOM() LIMIT 1')
    .then(tip => {
      res.status(200).json({
        status: "success!",
        tip: tip,
        message: "got random tip!"
      });
    })
    .catch(err => {
      return next(err)
    });
};

module.exports = {
  getAllTips,
  getRandomTip
};
