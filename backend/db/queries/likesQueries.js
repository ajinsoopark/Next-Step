const { db } = require('../index');

const getAllLikesForUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any('SELECT likes.id, answer_id FROM likes WHERE user_id=$1', [userId])
    .then((likes) => {
      res.status(200).json({
        message: "got all likes for one user",
        likes
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

const addNewLike = (req, res, next) => {
  req.body.user_id = parseInt(req.body.user_id);
  req.body.answer_id = parseInt(req.body.answer_id);
  db.none('INSERT INTO likes (user_id, answer_id) VALUES (${user_id}, ${answer_id})',
  req.body)
    .then(() => {
      res.status(200).json({
        message: "added a new like!"
      });
    })
    .catch(err => {
      return next(err)
    });
};

const deleteSingleLike = (req, res, next) => {
  let likeId = parseInt(req.params.id);
  db.result('DELETE FROM likes WHERE id=$1', likeId)
  .then(result => {
    res.status(200)
    .json({
      status: "success",
      message: "deleted a single like"
    });
  })
  .catch(err => {
    return next(err)
  })
};

const deleteLikesWithUserID = (req, res, next) => {

  let userID = parseInt(req.query.user_id);
  let answerID = parseInt(req.query.answer_id);

  db.result('DELETE FROM LIKES WHERE USER_ID = $1 AND ANSWER_ID = $2', [userID,answerID])
  .then(result => {
    res.status(200)
    .json({
      status: "success",
      message: "deleted a single like modifitied"
    });
  })
  .catch(err => {
    return next(err)
  })
};

const getAllLikesAndInfoForUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any('SELECT likes.id AS likes_id, answer_id, answers.answer_body, questions.question_body, questions.id AS questions_id, users.username,users.id AS user_id FROM likes JOIN answers ON likes.answer_id = answers.id JOIN questions ON answers.question_id = questions.id JOIN users ON answers.user_id = users.id WHERE likes.user_id =$1', [userId])
    .then((favorites) => {
      res.status(200).json({
        message: "got all likes for one user",
        favorites
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
  getAllLikesForUser,
  getAllLikesAndInfoForUser,
  addNewLike,
  deleteSingleLike,
  deleteLikesWithUserID
};
