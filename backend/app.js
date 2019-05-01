const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


//Passport and Session
const session = require("express-session")
const passport = require("./auth/local.js")

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const questionsRouter = require('./routes/questions');
const answersRouter = require('./routes/answers');
const likesRouter = require('./routes/likes');
const tipsRouter = require('./routes/tips');
const tipcatsRouter = require('./routes/tipcats');
const categoriesRouter = require('./routes/categories');
const feedbacksRouter = require('./routes/feedbacks');

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: "NextStepToTheNextStage",
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser("NextStepToTheNextStage"));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname + '/../frontend/build/')))
}
// app.use('/*', indexRouter);
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/questions', questionsRouter);
app.use('/api/answers', answersRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/tips', tipsRouter);
app.use('/api/tipcats', tipcatsRouter);
app.use('/api/likes', likesRouter);
app.use('/api/feedbacks',feedbacksRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../frontend/build/index.html"));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
