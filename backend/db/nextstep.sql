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
('Jacky', 'Tyson', 'Pan', 'tpan25@gmail', '$2a$10$wDfVs.zbsHLdELTYXEdI0uJXP017wdzjAJkH7H3YNXfI7BGG7AJve'),
('J@Pursuit', 'Jacky', 'O.', 'jackyong@pursuit.org', 'password4'),
('Diana', 'Diana', 'Gaona', 'dianagaona@pursuit.org', 'tobechangedlater'),
('Alyssa', 'Alyssa', 'Johnson', 'alyssajohnson@pursuit.org', 'tobechangedlater'),
('MrPrez', 'Abid', 'Hussein', 'abidhussein@pursuit.org', 'tobechangedlater'),
('Supreme', 'Michael', 'Stern', 'michaelstern@pursuit.org', 'tobechangedlater');

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
(2, 2, 'As one of the first group projects during my time at pursuit there were no roles that were given. Work was not being efficiently done because there was no leader so I decided that I could take the role. I made sure to have tasks clearly assigned and checked in routinely to see if group members needed assistance with their work. Every time a decision was made about the app I would make sure to here out everyones opinions. If there was anytime a conflict between opinions I would make the better decisions based on mentors opinions. Overall the flow of our groups workflow was fairly smooth. I was pretty happy at the end because I felt like we really worked well as a team, and enjoyed our time.'),
(2, 6, 'When I was studying at the Fashion Institute of Technology we’ve been often given group design projects. While it was exciting to work with other creatives, it was frustrating at times sas all of my teammates had their own ideas they wanted to see implemented and everone was very passionate and particular about things. Since we were all equals and we didn’t have a leader, I suggested that we all took a leadership role, but not fully - just parts of it. I was responsible for the fabrics and other materials for the project, each of the other teammates took lead on the measuring, sewing and finding our model. Whenever we had disagreements on the general design, we went to our mentor. I liked this kind of leadership distribution and it also helped me enjoy my design school experience.'),
(4, 3, 'The task was to create an application that incorporated music within 48 hours with strangers. It was difficult combining different ideas using a technology we were all foreign to. I think the time constraint was the biggest difficulty but it was also the best thing for our group. Having limited time was stressful. We had to dedicate time to learn how to use music in our app. There were merge conflicts. At the same time we had created a solid design plan because we had clearly defined what was needed for our app. We had great communication and comradery; when a member was struggling all the other teammates were more than willing to assist. Overall I feel like I learned a lot from this project.'),
(5, 1, 'The most difficult part of being a leader for me is balancing authority. Especially, if you were promoted to a leadership role as opposed to being hired for that role from the beginning. I had a situation like that when I was working at small restaurant in Queens a couple of years ago. I started out as a server and after a year I had been offered a position of an assistant manager. I was still working with the same people but now I had a position of authority. I feel that there’s a fine line between being the employees’ friend but also their boss. If you are too authoritarian in your leadership style, employees may become dejected and lack motivation. Likewise, being too lax or letting people slack will lend to an unproductive work environment. Your employees should respect your authority while still feeling you are a leader they can communicate their concerns to. While I struggled in the beginning, I expressed my concerns to both the owner and to one of the servers I felt closest to. They both said that I shouldn’t worry about it as it just takes time for everyone myself included to adjust. I asked them to keep me in check and let me know if I’m not being an effective leader. Eventually I became a sort of a “buffer” or a “filter” between the employees, who trusted me with their concerns, and the owner, who trusted me with his restaurant and felt confident leaving me in charge.'),
(6, 3, 'Understanding how to respect and allow members to just grow and flourish while still keeping a focus on everyone. I learned to be vocal on daily meetings but it is better to give people their space than to sufficating them.'),
(7, 3, 'We had created a working app within a 48 hour time limit. I think I am most proud of how we were capable of coming together and with all our different styles against the clock.'),
(9, 2, 'The first step before I try to make a decision is think if I have been in a similar situation in the past, and the outcome of my decision at that time. The next step is to make sure I understand the opinions of everyone involved in the situation if they are. Then I try to analyze any edge cases that might occur from my decision. If it is a difficult and major decision I tend to ask mentors about how they might go about the situation itself.'),
(9, 3, 'I spend most of my time by being a facilitator so I can learn the teams habits and bring up possible suggestions once I have a clear understanding of my team.'),
(10, 4, 'I used to front-line manager in a county farm where we have host large family events. On occassions we will have a children who gets lost and or parents who cannot find their kids. Now these occurences are not scheduled so many of them are sudden with limited information such as what was the child wearing, girl or boy, age and last seen. I taken some of these incidents where I have to make a quick sudden decision. To determined if any of this was a "best" decision it was based on time of the situation, effective of the decision, and the result it causes because we do not have a dedicate centralized security team there will be a head. Every minute waste on wrong information being pass around or allocating staff to the wrong area to search for the child. Could be the difference a kid that is lost or abduct.'),
(17, 1, 'I was working as a waitress in a small restaurant owned by a father and a son. Due to their personal conflict, the father abruptly decided to no longer be involved in the business. The son became the sole owner and the sole bearer of all responsibilities. I saw how hard it was for him to deal with double of the amount of his usual tasks, it started to reflect on the business and the team, so offered to help. I started coming in 4-5 hours before my shift so I could learn how to take care of the restaurant business. I dealt with produce and liquor deliveries, payroll, inventory, etc. It was hard at first, but I was learning so much! The owner recognized how helpful I was and promoted me to be the assistant manager. The restaurant continued to thrive and I’ve learned valuable managerial skills.'),
(19, 3, 'When we began learning how to create basic HTML websites I started my own personal project of displaying analytics for the everyday man. I spent time looking for an API that would give me all the important NBA data I need for my app, once I got my data I needed to come up with a way to display the data people can understand without a lot of background information. My project is still in the works; but i am learning what exactly is important for the users experience. I how to evaluate what is important in showing for the user.'),
(22, 3, 'My personal goals are based on my personal belief of what I think would make me happy. I like to have large and broad goals. Then build smaller achievable goals that would build to the larger goals.'),
(24, 3, 'Sure there was a time where in my previous job that I had to require an x number of canvas signitures the turnout location and the weather had not been what was originally set to be executed therefore we had to make due with the resources that we had. At first I was devestated for failing to do my job. But after a quick regroup with my team we were reset our goals and come to a group understanding that recarding the situation we would make the best out of it.'),
(27, 3, 'For our app we wanted songs to automatically play when a user logs in. One of the problems was the song wasn’t automatically playing. The page would render before the song would load. To answer this problem I created an iframe to load the same time the page would load. Then once the iframe loads it will re-render and on the rerender the song should be loaded and plays properly.'),
(30, 6, 'Being a fashion designer and working in the creative industry I encounter resistance to my ideas from co-workers. Creative people tend to be very passionate and particular about their ideas. So if we are designing a collection influenced by the 80s, I have a vision of disco and shoulder pads, while others are set on punk or hip-hop influence. The resistance doesn’t get better with time, my ideas are my children, I always care. But I am getting better at influencing other people’s opinion on why my idea might be better.'),
(42, 7, 'It depends on why they don’t like me. If it is something that I did or said then I apologize as soon as it comes to my attention. If it is glaringly obvious that they don’t like me then I will ask them for the reason and offer any clarification if necessary. As long as it doesn’t become a distraction then I will continue to treat them cordially until they change their view of me.'),
(45, 4, 'I told them they cannot discrimate against the staff that works here. Therefore, they are no longer welcomed to my business'),
(46, 3, 'I take team supporter it leaves me with less resposibility and the expectations are much lower. I excel at my required repsonsiblities'),
(47, 1, 'My most recent experience was working on our capstone project at Pursuit. We had 5 weeks to build and refine a full stack web application. We all had equal roles, no leader - it was up to us to decide who was working on what. I’d say that not having an assigned leader was the most difficult part. We were all very different - it took us some time to get on the same page for most of the questions (starting from the idea for the app, to the necessary features, to design of the app). Yet we were lucky that we were all very diplomatic, non-confrontational and mature. We quickly got into the work flow that suited us. We would meet up for 30 minutes twice a day, discuss what needed to be done for the day and the we worked on our own, staying in touch on Slack. Towards the end of the project when we had to refine the details we worked together more - to make sure everyone liked the finishng touches. It was a valuable experience when we got to embrace our differences, learned to compromise and still enjoy the process of creating something together.'),
(48, 3, 'During a project we had disagreements as to what were key features we wanted to create and implement into our app. One of the best things that did happen was the confrontation. We spoke in person for days on end to flush out all possible bugs and edge cases before we even create a single line of code. It was grueling but it helped structure the way we went moving forword.'),
(51, 3, 'During our capstone project. We had several conflicts on what should / shouldn’t be included in or website. We solved these conflicts by having daily meetings regarding choices we have made individually and ended up putting our answers to a vote'),
(60, 4, 'I notfied my immediate supervsior about it so they can be aware of it and ask for feedback for if this is something i should concern of or if this is something is not relevant.'),
(61, 6, 'In the beginning of each day I take about 30 minutes to go through all my email, read each of them carefully while taking notes on any tasks that I need to do, replies I need to send, meetings I need to attend. Then I break the tasks into categories by their importance and urgency. Urgent tasks always go first - usually it’s email replies, or any requests I need to make to another team - it’s always better to do it in the morning - so they have the time to put it on their schedules. Then I organize the important tasks by the estimated effort it will take to complete them. Productivity experts suggest the tactic of starting the lengthier task first. But some days it can be motivating to check a small task off the list before diving into deeper waters. '),
(64, 1, 'I used to work as a spa manager on UES in New York. It was a very demanding work environment. I had to manage 8 employees, their schedules and requests, clients’ phone calls, emails, and appointments, as well as the tasks the spa owner gave me for the day. It was definitely a challenge to juggle all of that on a daily basis. In the beginning I put the owner’s requests first, as she was the boss and I thought I had to keep her pleased to keep my job. But I also understood that the businesses that go above and beyond for their clients always do better than businesses that don’t, and I wanted to keep the employees happy too. So I brought it up to the attention of the owner asking for some guidance. Together we drafted a list of priorities. We’ve decided that I would always make sure that all the clients’ needs are met immediately, then I would accommodate the employees’ requests and schedule changes, and then I would work on the tasks the owner gave me. The most important part was keeping a list of all the requests and tasks, because there were just so many! I was happy the spa owner was understanding of the intensity of the work environment and at the end we ended up having a better relationship after our discussion.'),
(68, 4, 'Early preventions. Like teenage pregancy, understand what the results will be and use prevention to make sure the situation does not turn to that stressful event.'),
(69, 2, 'When I was at Pursuit I worked in a group for my capstone, and a co-worker had a lot going on in their personal lives so they had a hard time finishing tickets. I understood how they felt and wanted to help so I asked them if they wanted to go out after work to just hang out and take their mind off stressful things. The tickets they had the most difficulty with was a lot about styling and I offered to do some pair-programming to help ease the work load. In the end they thanked me after the project and was happy I was able to help.'),
(78, 2, 'During my time as an EMT I always felt a lot of pressure whenever patients had informed me of chest pain. There was an elderly patient Janice who had complained of chest pain and I first began with open ended questions. I had to analyze her history and make sure she did not have any allergies to medications. I administered medication that would help with chest pains, then made sure to keep her alert till we got to the hospital. The reason this was so memorable was because she gave a letter to my company saying that my partner and I had been very kind and professional, and thankfully it ended up not being a major situation.'),
(80, 4, 'At my last job, my direct co-worker and I will compete in a lot of projects. For example, we will have to design a signage for our front of the line staff. We qurrel about design and what it needs to be there. However, with our good relation we decided we should invidually make what we imagine and later collborate together to put a hybrid of what we both agreed on.'),
(81, 3, 'I was in charge of managing a client’s finances. My tasks included creating and collecting invoices, paying vendors, identify differences with the budget. One day I had paid a bill that had already been paid. I didn’t notice until the next day when I was updating the financial activities for the month. The first thing I had done was contact the bank and explain the situation; however, the bank was unable to return the funds. I had gone to my manager to see what I could do next because I was worried about being overbudge due to this small mistake. I was told to contact the client and inform them of the situation - the worst thing has already happened, there’s no reason to hide the mistake. Thus, I called and informed the client. After worrying I had learned the person who originally paid the invoice was the client and they understood the cause of double payment. After contacting the vendor of the situation with the client on the line - we were able to recieve a credit for the following bill. Even though we were technically overbudget for the month everything did fix itself later on. Looking back, I wish I had directly call the client once I found the mistake. I learned one of the many reasons our client stayed was because I had been forthcoming with my mistakes.'),
(84, 1, 'I worked as a spa manager at a boutique spa on UES. Part of my responsibilities was selling skin care products to clients. Very often the clients were skeptical about trying something new and pretty expensive. While it was difficult to do at first I quickly learned that most women were attracted to one single thing - glow. Glowing complexion was the ultimate sign of healthy, beautiful skin.As I have been “blessed” with oily skin, I never needed to use anything special to achieve that glow. I did my research and found out what skin care products specifically were going to give the same results to people with dry or normal skin. And that’s what I started recommending to clients who complimented my skin. They would wait for their appointment and I’d strike up a conversation. I’d steer the conversation toward the spa and the services, and the products. They would admire my skin I know sounds kind of vain but this is true story, I’d thank them and tell them that I drink lots of green tea and use this and that product. I would give samples and a few days later they would return and buy full sized products or get an appointment with the facialist.
To be 100% honest I felt comfortable doing this because the skin care line the spa used was one of the best I’ve ever encountered. The clients were happy with their clear glowing complexions, the sales were growing, the owner was happy, I was getting my commission as well as honing my presentation skills. It was a win-win-win :)'),
(87, 3, 'There was a time when I was working in hospitality where there was a family that had a lot of restrictions for our menu and it was pine tree. What I did was notify our kitchen before sending out the order and refering back to our menu to explain to the customers what it does & doesn’t contain. Unforunately it was processes in a facility in whick it did. So I was forced to speak to our manager and let him know. Forunately it was a something the customer was willing to take the risk for.'),
(88, 4, 'I always aplogized to the customer letting them know that the mistake was on the delivery of the first information and communicate with them again to make sure they understand where the policy is agian'),
(93, 2, 'During my time at Staples as a easy tech associate I had to speak with many different customers. I remember I was passed a customer due to the termination of the co-worker. I was berated because the customer was upset that my co-worker was not finishing the computer repair for the customer in a timely manner. I reasoned with the customer and made sure to take my time and listen to what their problems were. I assured my customer by letting them know I can give them my personal phone number to keep them updated with the computer repair. After repairing their computer, I showed them how to avoid running into the problem again. They ended up fairly happy with the situation because I was so caring with them.'),
(98, 4, 'I always have either my manager and co-worker to look it over. However, the best way to make sure everything is good, it to finish early and come back in a day and look at it again to see if everything is accurate.'),
(102, 4, 'I would not know how many square feet of pizza are eaten in a year, but here are the steps I will take to find it. 1. We willl find out how many lbs of flour is purchased by pizza store across the US, 2. find out the average lbs used to make a round pizza 3. find out the average square feet of a round pizza. 4. combine the data above and do some magic and get a estimate of square feet of pizza made and compare it to how much people throw away their food. '),
(104, 4, 'Mankind has already grow wings and flew. Mankind has not venture into the world of invisibility. '),
(105, 3, 'I’m a gatherer - I don’t think in the wild I would be able to kill to survive. I respect all forms of life and to choose who lives and who dies is too much of a burdden on me.'),
(106, 4, 'I will make sure I will get a  Wilson, and a device to communicate with other people in case of emergency.'),
(107, 2, 'If I had won a lottery ticket that large after a work interview, the first thing I would do is pay off my debt. Then I would want to pay off any of my family’s debt. After that I would make sure to give some to my parents, and family members. I would donate to the Alzheimers association because I think its is an important disease that more people should be aware of, and personally means alot to me. After that I would probably relocate closer to wherever I end up landing a job. '),
(108, 3, 'A giving tree; the giving tree was an inspirational tree that gives as much as possible and indirectly taught about a give & take relationship.'),
(110, 4, 'Because they are make to cover holes? If they are ovals it is just a different preceptions, if it square it would be call covers.'),
(111, 4, 'Out to kill you.'),
(112, 4, 'Think like the Rock.'),
(113, 4, 'Is like tofu - somtimes it smooth sometimes it old and sometimes it delicious to some people and some people love the warmth from eating it.'),
(115, 4, 'Do you know that the earth is not really round or flat. Because the moon consistenally pull the earth so technically the earth is like a giant size misshaped ballon.'),
(116, 3, '1. Staff have the ability to create their own culutre 2. Staff are allowed to take time off for educational purposes 3. An open ended 32 hour work week people may choose the days / hours they want to work so long as they meet the 32 hour mark'),
(117, 3, '1. How to develop the growth of my employees 2. How do I keep my employees in a constant rate of interest 3. How do we consistantly produce better products'),
(120, 3, 'I like the way you let us build our on culture while in the office. I don’t think it was important to force yourself into some of the events we had. We understand our roles in the office and having you force yourself to enjoy our events seemd stranious upon you.'),
(121, 4, 'No is a no. '),
(121, 3, 'I’d try to understand them as much as possible so I can relate and explain the task in a different way'),
(122, 1, 'First person I’d invite to dinner would be Kofi Annan, who is my favorite Secretary-General of the UN. He was my biggest inspiration, growing up and influenced me a lot. My dream of working for the UN began because of him. The second person would be Buddha, he would set the tone for the dinner and I think all guests would learn a lot from him. And he, probably, wouldn’t mind talking about the fascinating present times. And the third person would be George Michael, because he is forever my biggest crush.'),
(122, 4, 'Hitler ( because I want to study him, what motivated you live knowing you destory so much lives), Jesus ( Who will not want to speak to a messenger of god? ), Buddha ( Really want to see what he taught he students before he died.). I will just let lecture me.'),
(122, 3, 'Abraham Lincoln, T.S. Elliot, Mulan'),
(123, 1, 'If Jeff Besos were to give me a million dollars to launch my best entrepreneurial idea, I would hope I would also have his support and connections in some way. In that case I would love to create a way to purchase battery charge online/through an app. Let’s say your phone battery is at 3% and there’s just no place to charge it. And you could pay $5 for 70% of your battery. While it may seem unrealistic at this point, but if you think of the times when people were confused by text messaging and WiFi and AirDrop and now it’s just an essential part of our lives. I think it’s possible, and even though it might tak more than a million dollars, that’s the idea I would love to see come to life.'),
(123, 3, 'My idea would be an analytical app that helps the average person a chance to level the plainfield when dealing with fantasy lauges. It’s unforunate when people jump on a hobby but their lack of knowledge and experience is the biggest barrier to having fun. The app would evaluate players and explain what exactly are the numbers saying and even hide the unimportant numbers.'),
(124, 3, 'The two celebrities I would like to be my parents are - Chancelor Bennett and Sayo Yamamoto . I want to be raised by people who are creative and moral. Both are artists who have achieved success doing projects that were outside the industry norms and sticking to their convictions. '),
(126, 3, 'I’ve been following this company on twitter and I think the culture exhibited is something I want to be a part of'),
(127, 2, 'I think one of my greatest strength as a person is honesty. Ever since I was young I was taught to be honest. As I grew up and began working at jobs I started to learn more about radical candor. It helped me a lot because when I worked in a group project at pursuit it would make working more efficient and smooth. I think it is also important to be honest with yourself and know your limits and when you should or should not push them. At the same time being honest can sometimes be a weakness but I see it as both.'),
(128, 1, 'In my opinion my biggest weakness is how nervous I get when speaking in public. I definitely have a fear of public speaking, my hands start shaking a little, sometimes I feel like I will forget everything I was supposed to say. It’s been a lifelong struggle - as a student, my heart used to race at the mere thought of raising my hand in class, but I do feel it’s getting better with time. Since I am aware of my “weakness”, I am actively working on it. Whenever we had to give presentations at school I would prepare in advance. Plan out my speech and my slides, time myself, practice in front of a couple of friends. I also got into a habit of meditating for 5 minutes in the morning of the presentation day. And most importantly - I asked for feedback. Since there is usually at least one person in the audience that I know, I ask them to take notes whether on paper or mentally and give me constructive feedback after my presentation. While I still get nervous, I feel more in control and I am actually starting to like it.');

INSERT INTO feedbacks(answer_id, user_id, feedback_body) VALUES
(1, 1, 'What a great story. You described the situation, the problem, and how you stepped up to the role. And when you successfully complete the task while enjoying it - it’s the best outcome! Maybe mention at the end that the project itself was a success as well, so we know not only did you manage the team’s workflow, but the project itself was completed on time and with all the features fully functioning and everyone liked it.'),
(2, 2, 'I think this answer is good Alyssa, but maybe show more emphasis on how everyone took a leadership role and became democratic. Was it you who brought up the idea? If anything try to sell yourself a bit more.'),
(3, 1, 'That sounds like an intense yet fun experience! You can probably give a little more background on the set-up of the situation. And don’t be shy to highlight your leadership skills. It’s great that you are showing you are a good team player, but I’d love to hear more about the way you take charge and lead the team to success'),
(3, 2, 'I think this is a great answer, and story. What was unclear to me was what exactly was difficult ’leading’ the project. Also, I think you can avoid using ’we’ and use ’I’ more to show how your actions created the outcome or result.'),
(4, 2, 'I think this is a great answer! If it were me I would give a specific situation to back up your feelings about leadership. And the result should pertain more to that story/situation.'),
(6, 2, 'I think you can talk more about how you were the leader of the group. A major problem the group had possibly faced. How you lead the group to overcome that problem. And then what you were most proud of as the leader.'),
(9, 2, 'I think this answer can be more specific to a situation. It would be nice to hear about a situation where you did have limited information. The actions you had taken to find the child that might be lost. Lastly, the outcome of the situation and how you your decision helped with that outcome'),
(10, 2, 'I think this is a great answer. There was a situation, and the solution was you yourself. Awesome!'),
(11, 2, 'I think this is a great answer. I think there can be a stronger connection between the result of you learning about user experience, and what problem exactly got you to that point.'),
(14, 2, 'This is an awesome answer. I if had to add I would probably say how and what I did in order to get the result. For instance, what information did you use to come up with the iframe. How did you find out that this might work.'),
(16, 2, 'I think you can be more concise with the answer. If anything you can give more detail on how you would communicate with that someone rather than thinking of why they dont like you at work.'),
(18, 2, 'I think you can shape your answer in a different way in order to show how you would be a great asset to the team. Rather than seeing how there might be less work for you. Show how a team supporter can be helpful to the team.'),
(21, 2, 'I think you can go a little more into detail on a certain situation you remember where their were compromises. Overall great answer!'),
(31, 2, 'I think this is a great answer. It showed the situation and how you handled it by going to superiors. Luckily the result was the customer with a full stomach, not at the hospital.');

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
