-- DROP DATABASE IF EXISTS nextstep;
-- CREATE DATABASE nextstep;

-- \c nextstep;

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
('J@Pursuit', 'Jacky', 'O.', 'jackyong@pursuit.org', 'password4');

INSERT INTO categories(category) VALUES
('Leadership & Decision Making'),
('Interpersonal Skills'),
('Time & Stress Management'),
('Sales & Customer Service'),
('Analytical Skills'),
('Miscellaneous'),
('General Qs');

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
(2, 'Can you describe a time when you had to delegate work among a team? How did you decide who would do each task? Is there anything you would do differently?'),
(2, 'Can you tell me about a time when you let your team down? What did you do? How did you react?'),
(2, 'Can you describe a time when a co-worker or customer questioned your honesty? What did you do?'),
(2, 'Can you tell me about a time when you followed a rule that you didn’t agree with? Why did you comply? How did you feel?'),
(2, 'Can you talk about a time when it was difficult to be honest?'),
(2, 'Was there ever a time when you weren’t honest at work? What happened?'),
(2, 'Has there ever been a situation where you thought it was better to be dishonest? Why? What did you end up doing?'),
(2, 'Can you tell me about a time when you found out that a co-worker was doing something wrong? What did you do?'),
(3, 'When you schedule out the work you need to do, how do you decide what to do first?'),
(3, 'Can you tell me about a project you were in charge of? How did you organize the tasks and make sure everything got done?'),
(3, 'Can you describe a time when you were part of multiple projects at the same time? How did you handle the workload?'),
(3, 'When you have multiple requests from customers or co-workers, how do you prioritize them?'),
(3, 'Can you tell me about a time when you were behind on a project? What did you do?'),
(3, 'Can you describe a stressful work situation you experienced? How did you handle the situation?'),
(3, 'What was your most stressful project? Why was it stressful? What did you do to manage the stress? How did the project turn out?'),
(3, 'Can you tell me about a time when you saw a situation that could have become stressful? What did you do to prevent it?'),
(3, 'Can you tell me about a time when you tried to reduce stress for a co-worker?'),
(3, 'Can you tell me how you handled your transition between different jobs or positions in the past?'),
(3, 'Can you describe a time when changes happened that you couldn’t control? How did you react?'),
(3, 'an you describe a time when you experienced rapid change? How did you handle the situation?'),
(3, 'Can you tell me about a time when you changed the course of a project? How did you relay the changes to your team? Is there anything you wish you would have done differently?'),
(3, 'Can you talk about a time when you had to adapt to a co-worker’s work style to finish a task? What did you do?'),
(3, 'Can you think of a time when you weren’t comfortable with a change? What did you do?'),
(3, 'Can you talk about a setback you had at work? What did you do?'),
(3, 'Describe a time you faced a problem at work? What did you do? What would you do differently?'),
(3, 'Can you tell me about a time you had to work under a lot of pressure? How did you handle the situation?'),
(3, 'Can you describe a time that you faced a challenge at work? How did you feel? What steps did you take?'),
(3, 'Was there ever a time you had to compete against co-workers? What were the results?'),
(3, 'Can you tell me about a time when you made a mistake? What did you do? What did you learn from the situation? Was there anything you’d do differently?'),
(4, 'What have you done to increase your number of customers?'),
(4, 'What is your greatest accomplishment in sales? How did you achieve that?'),
(4, 'Can you tell me about a time when you convinced a reluctant customer to make a purchase? How did you do it?'),
(4, 'Can you talk about a time when you had to negotiate with a customer? What did you do? What was the outcome?'),
(4, 'Can you describe the steps you take to develop a relationship with a customer?'),
(4, 'Can you tell me about a time that you were unsure about a customer’s request? What did you do?'),
(4, 'Can you talk about a time when you and a customer miscommunicated? What did you do to repair communication?'),
(4, 'Can you talk about a time when you dealt with an upset or angry customer? What did you do? Is there anything you would have done differently?'),
(4, 'Can you tell me about a time you convinced a customer to stay with the business? What steps did you take?'),
(4, 'Can you describe a time when you went out of your way to please a customer?'),
(4, 'Have you ever defended a customer? Why? How did your co-workers or boss react?'),
(4, 'Was there ever a time when a co-worker’s customer was passed off to you? How did you let the customer know? How did you build relationship and trust with them?'),
(5, 'Can you describe a project that demonstrated your analytical skills?'),
(5, 'Can you tell me about a time when you had to analyze information? Why were you analyzing the information? What was your process?'),
(5, 'Can you talk about a time when you used your analytical skills to find a problem? How did you discover the problem? What did you do after you discovered it?'),
(5, 'Can you tell me about a time when you used your problem solving skills to find a solution to a problem?'),
(5, 'What do you do to verify that your work is accurate?'),
(5, 'Describe a time you made an error. Why did you miss the mistake? How did you handle the situation?'),
(5, 'Can you describe a time when a co-worker made a mistake and you discovered it? What did you do?'),
(6, 'If you could compare yourself with any animal, which would it be and why?'),
(6, 'How many square feet of pizza are eaten in the U.S. each year?'),
(6, 'What was the last gift you gave someone?'),
(6, 'If you had a choice between two superpowers, being invisible or flying, which would you choose?'),
(6, 'Are you a hunter or a gatherer?'),
(6, 'If you had to be shipwrecked on a deserted island, but all your human needs—such as food and water—were taken care of, what two items would you want to have with you?'),
(6, 'We finish the interview and you step outside the office and find a lottery ticket that ends up winning $10 million. What would you do?'),
(6, 'If you were a tree, what kind of tree would you be and why?'),
(6, 'You’ve been given an elephant. You can’t give it away or sell it. What would you do with the elephant?'),
(6, 'Why are manholes round?'),
(6, 'What do you think of garden gnomes?'),
(6, 'How would you solve problems if you were from Mars?'),
(6, 'Describe the color yellow to somebody who is blind.'),
(6, 'What’s the most interesting thing about you that we wouldn’t learn from your resume alone? '),
(6, 'Teach me something I don’t know in the next five minutes.'),
(6, 'If I were to hire you for this job and I granted you three promises with regard to working here, what would they be?'),
(6, 'Pretend you’re our CEO. What three concerns about the firm’s future keep you up at night?'),
(6, 'Which two organizations outside your own do you know the most people at and why?'),
(6, 'What is the funniest thing that has happened to you recently?'),
(6, 'Any advice for your previous boss?'),
(6, 'How would you convince someone to do something they didn’t want to do?'),
(6, 'If You Could Have Dinner With Three Famous People That Are No Longer Living, Who Would You Ask?'),
(6, 'Jeff Bezos walks into your office and says you can have a million dollars to launch your best entrepreneurial idea. What is it?'),
(6, 'Pick two celebrities to be your parents.'),
(7, 'Why do you want to join this company? (when answering, please, mention the company you are hoping to join)'),
(7, 'Why do you think you’d be a good fit for this company? (when answering, please, mention the company you are hoping to join)'),
(7, 'What do you consider to be your greatest strength?'),
(7, 'What do you consider to be your biggest weakness?');

INSERT INTO answers(question_id, user_id, answer_body) VALUES
(4, 3, 'The task was to create an application that incorporated music within 48 hours with strangers. It was difficult combining different ideas using a technology we were all foreign to. I think the time constraint was the biggest difficulty but it was also the best thing for our group. Having limited time was stressful. We had to dedicate time to learn how to use music in our app. There were merge conflicts. At the same time we had created a solid design plan because we had clearly defined what was needed for our app. We had great communication and comradery; when a member was struggling all the other teammates were more than willing to assist. Overall I feel like I learned a lot from this project.'),
(5, 1, 'The most difficult part of being a leader for me is balancing authority. Especially, if you were promoted to a leadership role as opposed to being hired for that role from the beginning. I had a situation like that when I was working at small restaurant in Queens a couple of years ago. I started out as a server and after a year I had been offered a position of an assistant manager. I was still working with the same people but now I had a position of authority. I feel that there’s a fine line between being the employees’ friend but also their boss. If you are too authoritarian in your leadership style, employees may become dejected and lack motivation. Likewise, being too lax or letting people slack will lend to an unproductive work environment. Your employees should respect your authority while still feeling you are a leader they can communicate their concerns to. While I struggled in the beginning, I expressed my concerns to both the owner and to one of the servers I felt closest to. They both said that I shouldn’t worry about it as it just takes time for everyone myself included to adjust. I asked them to keep me in check and let me know if I’m not being an effective leader. Eventually I became a sort of a “buffer” or a “filter” between the employees, who trusted me with their concerns, and the owner, who trusted me with his restaurant and felt confident leaving me in charge.'),
(6, 3, 'Understanding how to respect and allow members to just grow and flourish while still keeping a focus on everyone. I learned to be vocal on daily meetings but it is better to give people their space than to sufficating them.'),
(7, 3, 'We had created a working app within a 48 hour time limit. I think I am most proud of how we were capable of coming together and with all our different styles against the clock.'),
(9, 3, 'I spend most of my time by being a facilitator so I can learn the teams habits and bring up possible suggestions once I have a clear understanding of my team.'),
(17, 1, 'I was working as a waitress in a small restaurant owned by a father and a son. Due to their personal conflict, the father abruptly decided to no longer be involved in the business. The son became the sole owner and the sole bearer of all responsibilities. I saw how hard it was for him to deal with double of the amount of his usual tasks, it started to reflect on the business and the team, so offered to help. I started coming in 4-5 hours before my shift so I could learn how to take care of the restaurant business. I dealt with produce and liquor deliveries, payroll, inventory, etc. It was hard at first, but I was learning so much! The owner recognized how helpful I was and promoted me to be the assistant manager. The restaurant continued to thrive and I’ve learned valuable managerial skills.'),
(47, 1, 'My most recent experience was working on our capstone project at Pursuit. We had 5 weeks to build and refine a full stack web application. We all had equal roles, no leader - it was up to us to decide who was working on what. I’d say that not having an assigned leader was the most difficult part. We were all very different - it took us some time to get on the same page for most of the questions (starting from the idea for the app, to the necessary features, to design of the app). Yet we were lucky that we were all very diplomatic, non-confrontational and mature. We quickly got into the work flow that suited us. We would meet up for 30 minutes twice a day, discuss what needed to be done for the day and the we worked on our own, staying in touch on Slack. Towards the end of the project when we had to refine the details we worked together more - to make sure everyone liked the finishng touches. It was a valuable experience when we got to embrace our differences, learned to compromise and still enjoy the process of creating something together.'),
(64, 1, 'I used to work as a spa manager on UES in New York. It was a very demanding work environment. I had to manage 8 employees, their schedules and requests, clients’ phone calls, emails, and appointments, as well as the tasks the spa owner gave me for the day. It was definitely a challenge to juggle all of that on a daily basis. In the beginning I put the owner’s requests first, as she was the boss and I thought I had to keep her pleased to keep my job. But I also understood that the businesses that go above and beyond for their clients always do better than businesses that don’t, and I wanted to keep the employees happy too. So I brought it up to the attention of the owner asking for some guidance. Together we drafted a list of priorities. We’ve decided that I would always make sure that all the clients’ needs are met immediately, then I would accommodate the employees’ requests and schedule changes, and then I would work on the tasks the owner gave me. The most important part was keeping a list of all the requests and tasks, because there were just so many! I was happy the spa owner was understanding of the intensity of the work environment and at the end we ended up having a better relationship after our discussion.'),
(84, 1, 'I worked as a spa manager at a boutique spa on UES. Part of my responsibilities was selling skin care products to clients. Very often the clients were skeptical about trying something new and pretty expensive. While it was difficult to do at first I quickly learned that most women were attracted to one single thing - glow. Glowing complexion was the ultimate sign of healthy, beautiful skin.As I have been “blessed” with oily skin, I never needed to use anything special to achieve that glow. I did my research and found out what skin care products specifically were going to give the same results to people with dry or normal skin. And that’s what I started recommending to clients who complimented my skin. They would wait for their appointment and I’d strike up a conversation. I’d steer the conversation toward the spa and the services, and the products. They would admire my skin I know sounds kind of vain but this is true story, I’d thank them and tell them that I drink lots of green tea and use this and that product. I would give samples and a few days later they would return and buy full sized products or get an appointment with the facialist.
To be 100% honest I felt comfortable doing this because the skin care line the spa used was one of the best I’ve ever encountered. The clients were happy with their clear glowing complexions, the sales were growing, the owner was happy, I was getting my commission as well as honing my presentation skills. It was a win-win-win :)'),
(122, 1, 'First person I’d invite to dinner would be Kofi Annan, who is my favorite Secretary-General of the UN. He was my biggest inspiration, growing up and influenced me a lot. My dream of working for the UN began because of him. The second person would be Buddha, he would set the tone for the dinner and I think all guests would learn a lot from him. And he, probably, wouldn’t mind talking about the fascinating present times. And the third person would be George Michael, because he is forever my biggest crush.'),
(123, 1, 'If Jeff Besos were to give me a million dollars to launch my best entrepreneurial idea, I would hope I would also have his support and connections in some way. In that case I would love to create a way to purchase battery charge online/through an app. Let’s say your phone battery is at 3% and there’s just no place to charge it. And you could pay $5 for 70% of your battery. While it may seem unrealistic at this point, but if you think of the times when people were confused by text messaging and WiFi and AirDrop and now it’s just an essential part of our lives. I think it’s possible, and even though it might tak more than a million dollars, that’s the idea I would love to see come to life.'),
(128, 1, 'In my opinion my biggest weakness is how nervous I get when speaking in public. I definitely have a fear of public speaking, my hands start shaking a little, sometimes I feel like I will forget everything I was supposed to say. It’s been a lifelong struggle - as a student, my heart used to race at the mere thought of raising my hand in class, but I do feel it’s getting better with time. Since I am aware of my “weakness”, I am actively working on it. Whenever we had to give presentations at school I would prepare in advance. Plan out my speech and my slides, time myself, practice in front of a couple of friends. I also got into a habit of meditating for 5 minutes in the morning of the presentation day. And most importantly - I asked for feedback. Since there is usually at least one person in the audience that I know, I ask them to take notes whether on paper or mentally and give me constructive feedback after my presentation. While I still get nervous, I feel more in control and I am actually starting to like it.');

INSERT INTO feedbacks(answer_id, user_id, feedback_body) VALUES
(1, 1, 'That sounds like an intense yet fun experience! You can probably give a little more background on the set-up of the situation. And don’t be shy to highlight your leadership skills. It’s great that you are showing you are a good team player, but I’d love to hear more about the way you take charge and lead the team to success'),
(1, 2, 'I think this is a great answer, and story. What was unclear to me was what exactly was difficult ’leading’ the project. Also, I think you can avoid using ’we’ and use ’I’ more to show how your actions created the outcome or result.'),
(2, 2, 'I think this is a great answer! If it were me I would give a specific situation to back up your feelings about leadership. And the result should pertain more to that story/situation.');

INSERT INTO likes(answer_id, user_id) VALUES
(2, 2),
(2, 4);

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
