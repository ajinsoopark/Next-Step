DROP DATABASE IF EXISTS nextstep;
CREATE DATABASE nextstep;

\c nextstep;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR,
  email VARCHAR NOT NULL UNIQUE,
  password_digest VARCHAR NOT NULL,
  last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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
  feedback_body VARCHAR NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  answer_id INT NOT NULL REFERENCES answers(id) ON DELETE CASCADE
);

CREATE TABLE tipcats (
  id SERIAL PRIMARY KEY,
  tipcat VARCHAR NOT NULL
);

CREATE TABLE tips (
  id SERIAL PRIMARY KEY,
  tip_category INT NOT NULL REFERENCES tipcats(id),
  tip_title VARCHAR NOT NULL,
  tip_body VARCHAR NOT NULL
);

INSERT INTO users(username, first_name, last_name, email, password_digest) VALUES
('Jhenya', 'Jhenya', 'Ezhova', 'evgeniyaezhova@pursuit.org', '$2a$10$zrlQbCi2vAKlTqSgxEpvVO2.0OTlCFHVvCfM13Tvz6KXjBPVrhj3C'),
('jinsoo93', 'Alex', 'Park', 'alexparkqueens@gmail.com', 'password2'),
('thaiSonP', 'Tyson', 'Pan', 'tpan25@gmail', '$2a$10$wDfVs.zbsHLdELTYXEdI0uJXP017wdzjAJkH7H3YNXfI7BGG7AJve'),
('J@Pursuit', 'Jacky', 'O.', 'jacky@bunnyhopper.org', 'password4'),
('JanaSia2019', 'Jana', 'Sia', 'apple@sal.com', '$2a$10$7OrzSPK5MJ0fDJenNxYHv.ey4BDW25qXYjnJq26QbGGUv7Krr2jFi');

INSERT INTO categories(category) VALUES
('Leadership & Decision Making'),
('Interpersonal Skills'),
('Time & Stress Management'),
('Sales & Customer Service'),
('Analytical Skills'),
('Miscellaneous'),
('General Qs');


\COPY questions(category_id, question_body) FROM '../db/questions.csv' DELIMITER ',' CSV HEADER;
\COPY answers(question_id, user_id, answer_body) FROM '../db/answers.csv' DELIMITER ',' CSV HEADER;
\COPY feedbacks(answer_id, user_id, feedback_body) FROM '../db/answers.csv' DELIMITER ',' CSV HEADER;


INSERT INTO likes(answer_id, user_id) VALUES
(1, 2),
(1, 3),
(1, 4),
(4, 1),
(5, 2),
(7, 3),
(12, 1),
(15, 1),
(15, 2),
(16, 3),
(18, 4),
(19, 1),
(22, 2),
(22, 3),
(23, 1),
(25, 2),
(26, 3),
(29, 4),
(29, 2),
(31, 1),
(32, 3),
(32, 1),
(32, 2),
(33, 1),
(37, 2),
(39, 3),
(39, 4),
(39, 1),
(40, 2),
(41, 3),
(43, 1),
(45, 2),
(47, 3),
(47, 1),
(49, 4),
(50, 2),
(52, 1),
(52, 2),
(57, 3),
(57, 4),
(59, 2),
(60, 3),
(62, 4),
(63, 2),
(101, 2);

INSERT INTO tipcats(tipcat) VALUES
('Before'),
('During'),
('After');

INSERT INTO tips(tip_category, tip_title, tip_body) VALUES
(1, 'Research the Company', 'Before you go on a job interview, it’s important to find out as much as you can about not only the job but also the company. Company research is a critical part of interview preparation. It will help you prepare to both answer interview questions about the company and to ask the interviewer questions about the company. You will also be able to find out whether the company and the company culture are a good fit for you.'),
(1, 'Practice Interviewing', 'Take the time to practice answering interview questions you will probably be asked during a job interview. This will help give you a chance to prepare and practice answers, and will also help calm your nerves because you won’t be scrambling for an answer while you’re in the interview hot seat.'),
(1, 'Get Your Interview Clothes Ready', 'Don’t wait until the last minute to make sure your interview clothes are ready. Have an interview outfit ready to wear at all times, so you don’t have to think about what you’re going to wear while you’re scrambling to get ready for a job interview.'),
(1, 'What to Bring to a Job Interview', 'It’s important to know what to bring (and what not to bring) to a job interview. Items to bring include a portfolio with extra copies of your resume, a list of references, a list of questions ask the interviewer, and something to write with.
It’s also important to know what not to bring, including your cellphone (or at least turn your phone off), a cup of coffee, gum, or anything else beyond yourself and your credentials.'),
(1, 'Practice Interview Etiquette', 'Proper interview etiquette is important. Remember to greet the receptionist, your interviewer, and everyone else you meet politely, pleasantly, and enthusiastically.
During the interview, watch your body language – shake hands firmly and make eye contact as you articulate your points. Pay attention, be attentive, and look interested. This is something you can work on in your practice interviews.'),
(1, 'Get Directions', 'It’s important to know where you need to go for your job interview – ahead of time. That way, you’ll avoid running late to the interview. Use Google Maps or another app to get directions if you’re not sure where you are going.
Program your GPS, if you have one, so you can find the best route to the company. Check on parking, if it’s an issue.
If you have the time, it’s a good idea to do a practice run a day or two before the interview. That way, you’ll be sure about where you going and how long it will take to get there. Give yourself a few extra minutes and arrive a little early to the interview.'),
(2, 'Make It Feel More Like a Conversation Than a Q&A Session', 'You know the typical interview cadence: they ask, you answer, they ask, you answer until you hear, “Do you have any questions?” Then you ask, they answer, you ask, they answer until there are no more questions to ask or you run out of time.
Instead, create a new rhythm to the conversation: they ask, you answer…and then you ask something related to what they asked. Break up the typical pattern. Intersperse your questions throughout.'),
(2, 'Be in the Moment', 'Stay focused on the present situation, listen actively and concentrate all your attention on being genuinely interested in what the interviewer is saying.
If you’re confused by something they mentioned, don’t just let it go. Ask qualifying questions and be curious about the information being shared. If you’ve prepared well enough, you’ll be able to take what you’re hearing and evaluate it against what you need in this job. This enables you to ask things that will help you assess if this is the right opportunity for you.
You may also notice that the interviewer asks you about something quite obscure on your resume. Maybe it’s one of your interests or an area of competency with which most people aren’t familiar. This is a huge hint–odds are the interviewer has this same hobby or deals with this kind of work in their own position. Don’t let this clue pass you by. Pick up on it and ask if they also finds it to be an area of interest.'),
(2, 'Connect on a Personal Level', 'Keep expressing your enthusiasm for the work, the position, the organization and the interviewer. Always return to your answer to the sometimes unspoken (but always key) question, “Why should I hire you?” Communicate your specific talents, passions and skills in specific, concise and positive ways.
If you’re in there for the interview, you already have the basic capacity for the job. Now you need to build a relationship with the interviewer. People hire people they like, feel comfortable around and would like to interact with on a daily basis. You know you’re on the right track if the conversation is cordial, respectful and interesting for both parties.'),
(2, 'When You Realize You Aren’t Interested in the Position After All', 'Take the bull by the horns and tell the truth: “As you’re describing this job, I realize that it isn’t a good fit for what I’m seeking. I don’t want to waste your valuable time.” The interviewer’s next question will most likely be, “So, what are you looking for?” This gives you a chance to share your enthusiasm and passion for your vision.
Many times over the years, our career counselors at Centerpoint have heard feedback from clients about instances when this happened. In some, the interviewer gave them some useful advice about other opportunities in the field but outside their company. Others have found that the same employer called them back when a more appropriate position arose. There have even been times when a business created a brand-new position especially for that candidate. Their passion was that contagious!'),
(3, 'Send a thank you note.', 'The simple act of thanking your interviewer makes a big impact. You can send an email or you can mail a handwritten note. Sending a note by mail takes longer to get there, but also leaves a longer lasting impact. Thank the interviewer for the opportunity and their time. Personalize it as best as you can. A template style thank you letter is far less impactful than a customized one. The thank you note serves two functions – one, to express your gratitude, and two, to stay at the top of the employer’s mind.

Make sure that the thank you note isn’t just a list reiterating all of your abilities. It should remind the interviewer why you’re the right person for the job. Include a few takeaways from your interview to refresh the interviewer’s memory and highlight your strengths. You can mention something you’d be excited to work on, how you feel about the company culture, or how your specific skillset would best benefit the company.'),
(3, 'Follow up.', 'You want your interviewer to remember you, so sending a follow up message will help you stay at the top of their mind. Keep it short and succinct. Sending an incredibly long and wordy email could come across as if you’re desperate for the job. It’s also far less likely to actually get read by the interviewer. The shorter it is, the less time it takes them to read it. You want them to read every word, so keeping it succinct ensures they’ll read through it rather than just skimming it.

If they’ve given you a timeframe in which they’ll be making their decision, be sure to follow up if that time has passed. The intention of this follow up is to check in with the interviewer and to put your name at the top of their inbox. Include the fact that you’re still interested in the position and offer to provide them with any more information they might need, such as a sample of your work or answering further questions. Signing off with ‘I look forward to hearing from you soon’ is a good way to express your desire for a quick answer without directly asking ‘When are you actually going to make the decision?’.'),
(3, 'Write down the key points from the interview.', 'This must be done immediately after the interview while it’s still fresh in your mind. Write down any key points that were covered or big questions that were asked, as well as your answers. This is especially important in the first interview, as you may be asked similar questions again in subsequent interviews. Rather than giving the same answer again, you can add on to your previous answer and tell you interview that it’s something you’ve been thinking about since the first interview.

Also make a note of anything you wanted to say in the interview but didn’t get a chance to mention. You can make sure to bring up these points in the next interview, or if it’s your final interview, you might be able to mention them in a thank you note.

In addition to writing down the material that was covered, you should look at it with a critical eye to identify what went well and what didn’t. Take this information and use it to practice and improve for your next interview.  Analyzing your interview will help you identify any areas that you need to improve on, and will make sure you don’t forget any important details from the interview.'),
(3, 'Be patient.', 'Waiting to hear back from a company after you’ve interviewed can be incredibly stressful. Remember that everything takes time, and it’s all part of the process. It’s easy to keep replaying the interview over and over in your mind, but doing that too much will only lead to frustration. The more you analyze something, the more critical you become. Add the stress of waiting and not knowing to the mix, and before you know it you’ll have found a hundred things you think you did wrong in the interview. It’s best to analyze once or twice at most, send your follow up messages, then try to relax knowing that you did everything you could.');
