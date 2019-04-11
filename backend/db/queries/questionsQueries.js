const { db } = require('../index');

const getAllQuestions = (req, res, next) => {
  db.any("SELECT q.*, c.category FROM questions AS q FULL JOIN categories AS c on c.id = q.category_id")
    .then(question => {
      res.status(200).json({
        status: "success!",
        question,
        message: "got all questions!"
      });
    })
    .catch(err => {
      console.log(err)
      res.json({
        status: 'Failed',
        message: err
      })
    });
};

const getQuestionsByCategory = (req, res, next) => {
  let categoryId = parseInt(req.params.id);
  db.any('SELECT q.*, c.category FROM questions AS q FULL JOIN categories AS c on c.id = q.category_id WHERE category_id=$1', [categoryId])
  .then(questions => {
    res.status(200)
    .json({
      status: 'Success',
      questions,
      message: `Received questions for category(${categoryId})`
    })
  })
  .catch(err => {
    console.log(err)
    res.json({
      status: 'Failed',
      message: err
    })
  })
}

const getSingleQuestion = (req, res, next) => {
  let questionId = parseInt(req.params.id)
  db.one('SELECT q.*, c.category FROM questions AS q FULL JOIN categories AS c on c.id = q.category_id WHERE q.id=$1', [questionId])
  .then(question => {
    res.status(200)
    .json({
      status: 'Success',
      question: question,
      message: `Received question(${questionId})`
    })
  })
  .catch(err => {
    console.log(err)
    res.status({
      status: 'Failed',
      message: err
    })
    return next(err)
  })
};

const getRandomQuestion = (req, res, next) => {
  db.any('SELECT q.*, c.category FROM questions AS q FULL JOIN categories AS c on c.id = q.category_id ORDER BY RANDOM() LIMIT 1')
  .then(question => {
    res.status(200)
    .json({
      status: 'Success',
      question,
      message: 'Received random question'
    })
  })
  .catch(err => {
    console.log(err)
    res.json({
      status: 'Failed',
      message: err
    })
    return next(err)
  })
};

const getCountofAllQuestions = (req, res, next) => {
    db.any('SELECT count(id) FROM questions ')
    .then(count => {
        res.status(200)
        .json({
            status: 'Success',
            count: count,
            message: 'Received a count of all questions'
        })
    })
    .catch(err => {
        console.log(err)
        res.json({
            status: 'Failed',
            message: err
        })
        return next(err)
    })
};

module.exports = {
  getAllQuestions,
  getQuestionsByCategory,
  getSingleQuestion,
  getRandomQuestion,
  getCountofAllQuestions
}
