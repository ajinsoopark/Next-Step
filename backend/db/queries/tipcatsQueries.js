const { db } = require('../index');

const getAllTipcats = (req, res, next) => {
  db.any('SELECT * FROM tipcats')
    .then(tipcats => {
      res.status(200).json({
        status: 'success!',
        tipcats: tipcats,
        message: 'got all tipcats!'
      });
    })
    .catch(err => {
        console.log(err)
        res.json({
            status: 'Failed',
            message: err
        })
        return next(err)
    });
};

module.exports = {
  getAllTipcats
};