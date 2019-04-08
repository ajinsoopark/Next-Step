DROP DATABASE IF EXISTS nextstep;
CREATE DATABASE nextstep;

\c nextstep;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR,
  email VARCHAR NOT NULL UNIQUE,
  password_digest VARCHAR NOT NULL
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  category VARCHAR NOT NULL
);

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  category_id INT NOT NULL REFERENCES categories(id),
  question_body VARCHAR NOT NULL
);

CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  question_id INT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  answer_body VARCHAR NOT NULL
);

CREATE TABLE feedbacks (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  answer_id INT NOT NULL REFERENCES answers(id) ON DELETE CASCADE,
  feedback_body VARCHAR NOT NULL
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  answer_id INT NOT NULL REFERENCES answers(id) ON DELETE CASCADE
);

CREATE TABLE tips (
  id SERIAL PRIMARY KEY,
  tip_body VARCHAR NOT NULL
);

INSERT INTO users(username, first_name, last_name, email, password_digest) VALUES
('Jhenya', 'Jhenya', 'Ezhova', 'evgeniyaezhova@pursuit.org', 'password1'),
('jinsoo93', 'Alex', 'Park', 'alexparkqueens@gmail.com', 'password2'),
('thaiSonP', 'Tyson', 'Pan', 'tpan25@gmail', 'password3'),
('J@Pursuit', 'Jacky', 'O.', 'jackyong@pursuit.org', 'password4')

INSERT INTO categories(category) VALUES
('Leadership & Decision Making'),
('Interpersonal Skills'),
('Time & Stress Management'),
('Sales & Customer Service'),
('Analytical Skills'),
('Miscellaneous'),
('General Qs')

INSERT INTO questions(category_id, question_body) VALUES
(1, 'Can you describe a time when you were in charge of a project? What would you do differently?'),
(1, 'Can you talk about a time when a project didn’t have a leader, but you took charge? Why did you take charge? What did you do?'),
(1, 'Can you tell me about a time when you had a difficult group to lead? What did you do to manage them?'),
(1, 'What was the toughest project you had to lead? Why was it difficult?'),
(1, 'What is the most difficult part of being a leader for you? What do you do about that?'),
(1, 'Can you describe something that challenged you as a leader? How did the challenge change you?'),
(1, 'What was your greatest achievement as a leader? What were you most proud of?'),
(1, 'Can you talk about a time when you motivated your team? How did you do it? How effective were your efforts?'),
(1, 'What steps do you take before making a decision?'),
(1, 'Can you talk about a time you had to make a decision with limited information? How did you determine what would be the best decision?'),
(1, 'Can you tell me about a time when you had to make an immediate decision?'),
(1, 'Can you tell me about a time when you felt pressure while making a decision? How did the pressure affect you?'),
(1, 'What’s the most difficult decision you’ve made at work? How did you come up with your decision?'),
(1, 'Can you talk about a decision you made that impacted your co-workers? How did you choose the right decision?'),
(1, 'Was there a decision you made that wasn’t popular? What did you do?'),
(1, 'Can you describe a decision that you regretted? Why did you regret it?'),
(1, 'Can you describe a time when you saw a problem at work and created a solution for it.'),
(1, 'Can you tell me about a time you made a change at work?'),
(1, 'Can you talk about a project that you started? What did you do? What were the results?'),
(1, 'Can you tell me about a project that was implemented because of the work you did?'),
(1, 'Can you tell me about a time when you were bored at work and sought for more or different work? What steps did you take?'),
(1, 'Can you describe the process you use to set personal goals?'),
(1, 'Can you talk about a career goal you made? Did you reach it? What obstacles did you encounter?'),
(1, 'Can you tell me about a goal that you set but didn’t reach? Why didn’t you reach it? How did you feel?'),
(1, 'What goals did you set for your team? How did you keep people on track to meet the goals?'),
(1, 'Can you describe a time when a manager asked you to come up with a creative way to complete a project? What steps did you take?'),
(1, 'Can you tell me about a problem you solved in a unique way? What happened?'),
(1, 'Can you describe a project where none of the usual paths to completion worked? What did you do instead?'),
(1, 'Can you talk about a time when you presented a creative idea to your co-workers.'),
(1, 'Can you tell me about a time when your creative idea received resistance from co-workers? How did you react? How did you feel?'),
(1, 'Can you tell me about a time when your creative idea failed? How did you feel? What would you do differently?'),
(2, 'Can you tell me about how you communicated with your previous bosses?'),
(2, 'Can you tell me about a time when you communicated with a person you didn’t like?'),
(2, 'Can you talk about a time when your communication failed? What caused the problem? How did you handle the situation?'),
(2, 'Can you describe a time when you had to work with a remote co-worker? How did you stay in touch? What difficulties did you experience?'),
(2, 'Have you ever given a speech or presentation for your job? How did you prepare? How was the presentation received?'),
(2, 'Can you describe a time when you had to give a presentation without preparation? What did you do?'),
(2, 'Can you talk about how you’ve used your written communication skills?'),
(2, 'Can you tell me about a time when you used a communication method that was outside the norm for what you were doing? What did you do? Was it effective?'),
(2, 'Can you describe a time when you had a conflict with someone at work? What did you do?'),
(2, 'Can you describe a time when you dealt with a co-worker you didn’t like?'),
(2, 'Can you tell me how you communicate with someone who doesn’t like you?'),
(2, 'Can you tell me about a time when you disagreed with a manager? What did you do?'),
(2, 'How have you maintained relationships with your co-workers? What skill do you use?'),
(2, 'Was there ever a time that you didn’t get along with a customer? What did you do?'),
(2, 'What role do you normally take on a team? Why?'),
(2, 'Can you tell me about your most recent experience working with a team? What was your role? How did you interact with the other team members?'),
(2, 'Can you talk about a time when team members disagreed with you? What did you do?'),
(2, 'Can you describe a time when you tried to solve a dispute within the team? What was the result?'),
(2, 'Was there ever a time when you were part of a team where the people didn’t get along? What happened? What did you do?'),
(2, 'Can you talk about a time when your team members had to compromise? What was the result?'),
(2, 'Can you describe a time when a team member wasn’t doing their work? What did you do?'),
(2, ''),
(2, ''),
(2, ''),
(2, ''),
(2, ''),
(2, ''),
(2, ''),
(2, ''),
(3, ''),
(3, ''),
(3, ''),
(3, ''),
(3, ''),
(3, ''),
(3, ''),
(3, ''),
(3, ''),
(3, ''),
(3, ''),
(3, ''),
(3, ''),
(3, ''),
(3, ''),
(3, ''),
(3, ''),
(3, ''),
(3, ''),
(3, ''),
(3, ''),
(4, ''),
(4, ''),
(4, ''),
(4, ''),
(4, ''),
(4, ''),
(4, ''),
(4, ''),
(4, ''),
(4, ''),
(4, ''),
(4, ''),
(5, ''),
(5, ''),
(5, ''),
(5, ''),
(5, ''),
(5, ''),
(5, ''),
(6, ''),
(6, ''),
(6, ''),
(6, ''),
(6, ''),
(6, ''),
(6, ''),
(6, ''),
(6, ''),
(6, ''),
(6, ''),
(6, ''),
(6, ''),
(6, ''),
(6, ''),
(6, ''),
(6, ''),
(6, ''),
(6, ''),
(6, ''),
(6, ''),
(6, ''),
(6, ''),
(6, ''),
(7, ''),
(7, '')


INSERT INTO answers(question_id, user_id, answer_body) VALUES
()

INSERT INTO feedbacks(user_id, answer_id, feedback_body) VALUES
()

INSERT INTO likes(user_id, answer_id) VALUES
()

INSERT INTO tips(tip_body) VALUES
()
