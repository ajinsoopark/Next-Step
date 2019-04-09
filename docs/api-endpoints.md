# API Endpoints

# HTML API

### Root

* `GET /` - loads React web app

## JSON API

### Users

* `GET /api/users`
    * Users index/search
* `POST /api/users`
    * Creates new user
* `GET /api/users/:userId`
    * Fetches single existing user profile
* `PATCH /api/users/:userId`
    * Allows user to update their profile
* `DELETE /api/users/:userId`
    * Deletes user profile

### Session

* `POST /api/session` 
    * logs in user / creates session
* `DELETE /api/session` 
    * logs out user

### Questions

* `GET /api/questions`
    * Fetches all questions
* `GET /api/questions/category/:id`
    * Fetches all questions by category
* `GET /api/questions/random`
    * Fetches random question
*  `GET /api/questions/:id`
    * Fetches single question

### Answers

* `GET /api/answers/`
    * Fetches all answers
* `GET /api/answers/:id`
    * Fetches single answer
* `GET /api/answers/question/:id`
    * Fetches answers for a question
