const { db } = require('../index')

const getAllAnswers = (req, res, next) => {
    db.any('SELECT a.*, u.username, r.likes FROM answers AS a FULL JOIN users AS u ON a.user_id = u.id FULL JOIN (SELECT answer_id, count(*) AS likes FROM likes GROUP BY answer_id) AS r ON a.id = r.answer_id')
    .then(answers => {
        res.status(200)
        .json({
            status: 'Success',
            answers,
            message: 'Received all answers'
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
}

const getSingleAnswer = (req, res, next) => {
    let answerId = parseInt(req.params.id)
    db.one('SELECT a.*, u.username, r.likes FROM answers AS a FULL JOIN users AS u ON a.user_id = u.id FULL JOIN (SELECT answer_id, count(*) AS likes FROM likes GROUP BY answer_id) AS r ON a.id = r.answer_id WHERE a.id=$1', [answerId])
    .then(answer => {
        res.status(200)
        .json({
            status: 'Success',
            answer,
            message: `Received answer(${answerId})`
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
}

const getAllQandAForOneUser = (req, res, next) => {
    let userId = parseInt(req.params.id);
    db.any ('SELECT username, question_id,question_body, answer_body, answers.id, likesCount FROM answers JOIN users ON answers.user_id = users.id JOIN questions ON answers.question_id = questions.id FULL JOIN (SELECT answer_id, count(*) AS likesCount FROM likes GROUP BY answer_id) AS l ON answers.id = l.answer_id WHERE users.id=$1 ORDER BY -likesCount ASC' , [userId])
    .then(answers => {
        res.status(200)
        .json({
            status: 'Success',
            answers: answers,
            message: 'Received all answers by one user'
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

const getCountAnswersofOneUser = (req, res, next) => {
    let userId = parseInt(req.params.id);
    db.any('SELECT COUNT(DISTINCT question_id) FROM answers WHERE user_id=$1', [userId])
    .then(count => {
        res.status(200)
        .json({
            status: 'Success',
            count: count,
            message: 'Received all answers by one user'
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

const addNewAnswer = (req, res, next) => {
  req.body.user_id = parseInt(req.body.user_id);
  req.body.question_id = parseInt(req.body.question_id);
  db.none(
  'INSERT INTO answers (user_id, question_id, answer_body) VALUES (${user_id}, ${question_id}, ${answer_body})',
  req.body)
    .then(() => {
      res.status(200).json({
        message: "added a new answer"
      });
    })
    .catch(err => {
      next(err);
    })
};

const editSingleAnswer = (req, res, next) => {

  db.none('UPDATE answers SET answer_body=${answer_body}, user_id=${user_id}, question_id=${question_id} WHERE id=${answerId}', {
    answerId: req.params.id,
    answer_body: req.body.answer_body,
    question_id: req.body.question_id,
    user_id: req.body.user_id
  })
  .then(() => {
    res.status(200)
    .json({
      status: "success",
      message: "edited one answer"
    });
  })
  .catch(err => {
    return next(err)
  })
};

const deleteSingleAnswer = (req, res, next) => {
  let answerId = parseInt(req.params.id);
  db.result('DELETE FROM answers WHERE id=$1', answerId)
  .then(result => {
    res.status(200)
    .json({
      status: "success",
      message: "deleted a single answer"
    });
  })
  .catch(err => {
    return next(err)
  })
};


const getAllAnswersWithTheQuestion = (req, res, next) => {
    console.log(req)
    db.any('SELECT questions.id AS Question_ID, question_body, answers.id AS answers_ID, answer_body, users.id AS USER_ID, COALESCE (l.count, 0) AS like_count, username AS by_user FROM QUESTIONS LEFT JOIN ANSWERS ON QUESTIONS.id = answers.question_id FULL JOIN (SELECT answer_id, COUNT(*) FROM likes GROUP BY answer_id) AS l ON ANSWERS.id = l.answer_id LEFT JOIN USERS ON ANSWERS.user_id = USERS.ID WHERE question_id = $1 ORDER BY answers.id DESC',[req.query.id,req.query.user_id])
    .then(answers => {
        res.status(200)
        .json({
            status: 'Success',
            answers,
            message: 'Received the question and other people answers'
        })
    })
    .catch(err => {
        console.log(err)
        res.json({
            status: 'Failed/ ERROR',
            message: err
        })
        return next(err)
    })
}

const getAnswerByQuestionByUser = (req, res, next) => {
    // console.log(req.query.questionID)
    // console.log(req.query.userID)
    db.any('SELECT questions.id AS Question_ID, answers.id AS answers_ID, answer_body, users.id AS user_id, username AS by_user, COALESCE (l.count, 0) AS like_count FROM QUESTIONS LEFT JOIN ANSWERS ON QUESTIONS.id = answers.question_id LEFT JOIN USERS ON ANSWERS.user_id = USERS.ID FULL JOIN (SELECT answer_id, COUNT(*) FROM likes GROUP BY answer_id) AS l ON ANSWERS.id = l.answer_id WHERE question_id = $1 AND users.id = $2 ORDER BY answers.id DESC',[req.query.questionID, req.query.userID])
    .then(answer => {
        res.status(200)
        .json({
            status: '200',
            answer,
            message: 'Got answer of user by the question '
        })
    })
    .catch(err => {
        console.log(err)
        res.json({
            status: '404',
            message: err
        })
        return next(err)
    })
}

const getAllAnswersWithQuestionsLikes = (req, res, next) => {
    let userId = parseInt(req.params.id)

    db.any('SELECT a.id, a.user_id, a.answer_body, u.username, qc.question_body, qc.category, l.count AS like_count FROM answers AS a FULL JOIN users AS u ON a.user_id = u.id FULL JOIN (SELECT q.id, q.question_body, c.category FROM questions AS q FULL JOIN categories AS c ON q.category_id = c.id) AS qc ON qc.id = a.question_id FULL JOIN (SELECT answer_id, COUNT(*) FROM likes GROUP BY answer_id) AS l ON a.id = l.answer_id WHERE a.user_id = $1 ORDER BY a.id', [userId])
    .then(answers => {
        res.status(200)
        .json({
            status: 'Success',
            answers,
            message: 'Received answers with pertaining questions and likes'
        })
    })
    .catch(err => {
        console.log(err)
        res.json({
            status: 'Failed',
            message: err
        })
        next(err)
    })
}

const getAllUserProgress =(req,res)=>{
  db.any('SELECT users.id, users.username, COUNT (DISTINCT question_id) FROM answers FULL JOIN users ON answers.user_id=users.id GROUP BY users.id, users.username ORDER BY COUNT desc')
  .then(response=>{
    res.status(200)
    .json({
      status:'success',
      response,
      message: 'This is the current leaderboard of people who answered questions'
    })
  })
  .catch(err=>{
    console.log(err)
  })
}


// queries from the lines below will be for a specified user
// including the likes of the answers
// question from where the answer came from
// and category in which the question was in

const getAnswersByCategoryAndOld = (req, res, next) => {
    let userId = parseInt(req.params.userId)
    let categoryId = parseInt(req.params.catId)
    db.any('SELECT a.id, a.user_id, a.answer_body, u.username, qc.question_body, qc.category, COALESCE (l.count, 0) AS like_count FROM answers AS a FULL JOIN users AS u ON a.user_id = u.id FULL JOIN (SELECT q.id, q.question_body, c.category, q.category_id FROM questions AS q FULL JOIN categories AS c ON q.category_id = c.id) AS qc ON qc.id = a.question_id FULL JOIN (SELECT answer_id, COUNT(*) FROM likes GROUP BY answer_id) AS l ON a.id = l.answer_id WHERE a.user_id = $1 AND qc.category_id = $2 ORDER BY id ASC', [userId, categoryId])
    .then(answers => {
        res.status(200)
        .json({
            status: 'Success',
            answers,
            message: `Received oldest answers by category user(${userId})`
        })
    })
    .catch(err => {
        console.log(err)
        res.json({
            status: 'Failed',
            message: err
        })
        next(err)
    })
}

const getAnswersByCategoryAndNew = (req, res, next) => {
    let userId = parseInt(req.params.userId)
    let categoryId = parseInt(req.params.catId)
    db.any('SELECT a.id, a.user_id, a.answer_body, u.username, qc.question_body, qc.category, COALESCE (l.count, 0) AS like_count FROM answers AS a FULL JOIN users AS u ON a.user_id = u.id FULL JOIN (SELECT q.id, q.question_body, c.category, q.category_id FROM questions AS q FULL JOIN categories AS c ON q.category_id = c.id) AS qc ON qc.id = a.question_id FULL JOIN (SELECT answer_id, COUNT(*) FROM likes GROUP BY answer_id) AS l ON a.id = l.answer_id WHERE a.user_id = $1 AND qc.category_id = $2 ORDER BY id DESC', [userId, categoryId])
    .then(answers => {
        res.status(200)
        .json({
            status: 'Success',
            answers,
            message: `Received newest answers by category user(${userId})`
        })
    })
    .catch(err => {
        console.log(err)
        res.json({
            status: 'Failed',
            message: err
        })
        next(err)
    })
}

const getAnswersByCategoryAndMostPop = (req, res, next) => {
    let userId = parseInt(req.params.userId)
    let categoryId = parseInt(req.params.catId)
    db.any('SELECT a.id, a.user_id, a.answer_body, u.username, qc.question_body, qc.category, COALESCE (l.count, 0) AS like_count FROM answers AS a FULL JOIN users AS u ON a.user_id = u.id FULL JOIN (SELECT q.id, q.question_body, c.category, q.category_id FROM questions AS q FULL JOIN categories AS c ON q.category_id = c.id) AS qc ON qc.id = a.question_id FULL JOIN (SELECT answer_id, COUNT(*) FROM likes GROUP BY answer_id) AS l ON a.id = l.answer_id WHERE a.user_id = $1 AND qc.category_id = $2 ORDER BY like_count DESC', [userId, categoryId])
    .then(answers => {
        res.status(200)
        .json({
            status: 'Success',
            answers,
            message: `Received most popular answers by category for user(${userId})`
        })
    })
    .catch(err => {
        console.log(err)
        res.json({
            status: 'Failed',
            message: err
        })
        next(err)
    })
}

const getAnswersByCategoryAndLeastPop = (req, res, next) => {
    let userId = parseInt(req.params.userId)
    let categoryId = parseInt(req.params.catId)
    db.any('SELECT a.id, a.user_id, a.answer_body, u.username, qc.question_body, qc.category, COALESCE (l.count, 0) AS like_count FROM answers AS a FULL JOIN users AS u ON a.user_id = u.id FULL JOIN (SELECT q.id, q.question_body, c.category, q.category_id FROM questions AS q FULL JOIN categories AS c ON q.category_id = c.id) AS qc ON qc.id = a.question_id FULL JOIN (SELECT answer_id, COUNT(*) FROM likes GROUP BY answer_id) AS l ON a.id = l.answer_id WHERE a.user_id = $1 AND qc.category_id = $2 ORDER BY like_count ASC', [userId, categoryId])
    .then(answers => {
        res.status(200)
        .json({
            status: 'Success',
            answers,
            message: `Received least popular answers by category for user(${userId})`
        })
    })
    .catch(err => {
        console.log(err)
        res.json({
            status: 'Failed',
            message: err
        })
        next(err)
    })
}

const getAnswersByMostPop = (req, res, next) => {
    let userId = parseInt(req.params.id)
    db.any('SELECT a.id, a.user_id, a.answer_body, u.username, qc.question_body, qc.category, COALESCE (l.count, 0) AS like_count FROM answers AS a FULL JOIN users AS u ON a.user_id = u.id FULL JOIN (SELECT q.id, q.question_body, c.category, q.category_id FROM questions AS q FULL JOIN categories AS c ON q.category_id = c.id) AS qc ON qc.id = a.question_id FULL JOIN (SELECT answer_id, COUNT(*) FROM likes GROUP BY answer_id) AS l ON a.id = l.answer_id WHERE a.user_id = $1 ORDER BY LIKE_count DESC', [userId])
    .then(answers => {
        res.status(200)
        .json({
            status: 'Success',
            answers,
            message: `Received most popular answers for user(${userId})`
        })
    })
    .catch(err => {
        console.log(err)
        res.json({
            status: 'Failed',
            message: err
        })
        next(err)
    })
}

const getAnswersByLeastPop = (req, res, next) => {
    let userId = parseInt(req.params.id)
    db.any('SELECT a.id, a.user_id, a.answer_body, u.username, qc.question_body, qc.category, COALESCE (l.count, 0) AS like_count FROM answers AS a FULL JOIN users AS u ON a.user_id = u.id FULL JOIN (SELECT q.id, q.question_body, c.category, q.category_id FROM questions AS q FULL JOIN categories AS c ON q.category_id = c.id) AS qc ON qc.id = a.question_id FULL JOIN (SELECT answer_id, COUNT(*) FROM likes GROUP BY answer_id) AS l ON a.id = l.answer_id WHERE a.user_id = $1 ORDER BY LIKE_count ASC', [userId])
    .then(answers => {
        res.status(200)
        .json({
            status: 'Success',
            answers,
            message: `Received least popular answers for user(${userId})`
        })
    })
    .catch(err => {
        console.log(err)
        res.json({
            status: 'Failed',
            message: err
        })
        next(err)
    })
}

const getAnswersByNewest = (req, res, next) => {
    let userId = parseInt(req.params.id)
    db.any('SELECT a.id, a.user_id, a.answer_body, u.username, qc.question_body, qc.category, COALESCE (l.count, 0) AS like_count FROM answers AS a FULL JOIN users AS u ON a.user_id = u.id FULL JOIN (SELECT q.id, q.question_body, c.category, q.category_id FROM questions AS q FULL JOIN categories AS c ON q.category_id = c.id) AS qc ON qc.id = a.question_id FULL JOIN (SELECT answer_id, COUNT(*) FROM likes GROUP BY answer_id) AS l ON a.id = l.answer_id WHERE a.user_id = $1 ORDER BY id DESC', [userId])
    .then(answers => {
        res.status(200)
        .json({
            status: 'Success',
            answers,
            message: `Received newest answers for user(${userId})`
        })
    })
    .catch(err => {
        console.log(err)
        res.json({
            status: 'Failed',
            message: err
        })
        next(err)
    })
}

const getAnswersByOldest = (req, res, next) => {
    let userId = parseInt(req.params.id)
    db.any('SELECT a.id, a.user_id, a.answer_body, u.username, qc.question_body, qc.category, COALESCE (l.count, 0) AS like_count FROM answers AS a FULL JOIN users AS u ON a.user_id = u.id FULL JOIN (SELECT q.id, q.question_body, c.category, q.category_id FROM questions AS q FULL JOIN categories AS c ON q.category_id = c.id) AS qc ON qc.id = a.question_id FULL JOIN (SELECT answer_id, COUNT(*) FROM likes GROUP BY answer_id) AS l ON a.id = l.answer_id WHERE a.user_id = $1 ORDER BY id ASC', [userId])
    .then(answers => {
        res.status(200)
        .json({
            status: 'Success',
            answers,
            message: `Received oldest answers for user(${userId})`
        })
    })
    .catch(err => {
        console.log(err)
        res.json({
            status: 'Failed',
            message: err
        })
        next(err)
    })
}

const getSearchResult = (req,res,next)=>{
  let search = ("%" + req.params.search + "%")
  db.any('SELECT users.username, answers.user_id,answers.question_id,answers.answer_body,questions.question_body FROM users JOIN answers ON users.id = answers.user_id JOIN questions ON questions.id = answers.question_id WHERE username LIKE $1 OR answer_body LIKE $1 OR question_body LIKE $1 ' , [search])
  .then(results=>{
    res.status(200)
    .json({
      status:'success',
      results
    })
  })
  .catch(err => {
      console.log(err)
      res.json({
          status: 'Failed',
          message: err
      })
      next(err)
  })
}

module.exports = {
    getAllAnswers,
    getSingleAnswer,
    getAllQandAForOneUser,
    getCountAnswersofOneUser,
    addNewAnswer,
    editSingleAnswer,
    deleteSingleAnswer,
    getAllAnswersWithTheQuestion,
    getAnswerByQuestionByUser,
    getAllAnswersWithQuestionsLikes,
    getAllUserProgress,
    getAnswersByCategoryAndOld,
    getAnswersByCategoryAndNew,
    getAnswersByCategoryAndMostPop,
    getAnswersByCategoryAndLeastPop,
    getAnswersByLeastPop,
    getAnswersByMostPop,
    getAnswersByNewest,
    getAnswersByOldest,
    getSearchResult
}
