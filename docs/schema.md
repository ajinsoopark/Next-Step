# Schema Information

## Users
column name   | data type | details
--------------|-----------|----------
id            | integer   | primary key, not null
username      | string    | indexed, not null unique
email         | string    | indexed, not null unique
first_name    | string    | not null
last_name     | string    | not null
password      | string    | not null
avatar        | string    |

## Categories
column name   | data type | details
--------------|-----------|----------
id            | integer   | primary key, not null
category      | string    | not null

## Questions 
column name   | data type | details
--------------|-----------|---------
id            | integer   | primary key, not null
category_id   | integer   | not null, key (references categories), indexed
user_id       | integer   | not null, key (references users), indexed

# Answers 
column name   | data type | details
--------------|-----------|---------
id            | integer   | primary key, not null
user_id       | integer   | not null, key (references users), indexed
question_id   | integer   | not null, key (references questions), indexed
answer_body   | string    | not null

# Feedback
column name   | data type | details
--------------|-----------|---------
id            | integer   | primary key, not null
user_id       | integer   | not null, key (references users), indexed
answer_id     | integer   | not null, key (references answers), indexed
feedback_body | string    | not null

# Likes 
column name   | data type | details
--------------|-----------|----------
id            | integer   | primary key, not null
user_id       | integer   | not null, key (references users), indexed
answer_id     | integer   | not null, key (references answers), indexed