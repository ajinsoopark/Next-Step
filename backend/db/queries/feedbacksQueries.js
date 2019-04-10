const { db } = require('../index');

const getAllFeedbacksForOneAnswer = (req, res, next) => {
  let answerId = parseInt(req.params.id);
  db.any('SELECT * FROM feedbacks WHERE answer_id=$1', [answerId])
    .then(feedbacks => {
      res.status(200).json({
        status: "success!",
        feedbacks: feedbacks,
        message: "got all feedback for one answer!"
      });
    })
    .catch(err => {
      return next(err)
    });
};

const addNewFeedback = (req, res, next) => {
  db.none('INSERT INTO feedbacks(user_id, answer_id, feedback_body) VALUES (${user_id}, ${answer_id}, ${feedback_body})', req.body)
    .then(() => {
      res.status(200)
      .json({
        message: "added new feedback"
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

const deleteSingleFeedback = (req, res, next) => {
  let feedbackId = parseInt(req.params.id);
  db.result('DELETE FROM feedbacks WHERE id=$1', feedbackId)
  .then(result => {
    res.status(200)
    .json({
      status: "success",
      message: "deleted a single feedback"
    });
  })
  .catch(err => {
    return next(err)
  })
};

module.exports = {
  getAllFeedbacksForOneAnswer,
  addNewFeedback,
  deleteSingleFeedback
};
