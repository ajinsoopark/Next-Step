const { db } = require('../index')

const getAllAnswers = (req, res, next) => {
    db.any('SELECT *.a, u.username, r.likes FROM answers AS a FULL JOIN users AS u ON a.user_id = u.id FULL JOIN (SELECT answer_id, count(*) AS likes FROM likes GROUP BY answer_id) AS r ON a.id = r.answer_id')
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

    db.one('SELECT *.a, u.username, r.likes FROM answers AS a FULL JOIN users AS u ON a.user_id = u.id FULL JOIN (SELECT answer_id, count(*) AS likes FROM likes GROUP BY answer_id) AS r ON a.id = r.answer_id WHERE id=$1', [answerId])
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



module.exports = {
    getAllAnswers,
    getSingleAnswer
}