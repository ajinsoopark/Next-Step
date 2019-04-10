const { db } = require('../index');

const getAllCategories = (req, res, next) => {
  db.any('SELECT * FROM categories')
    .then(categories => {
      res.status(200).json({
        status: 'success!',
        categories: categories,
        message: 'got all categories!'
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
  getAllCategories
};
