DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id serial PRIMARY KEY,
    username VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password VARCHAR(100) NOT NULL
);

INSERT INTO users (username, email, password)
VALUES
    ('Bob101', 'bob@gmail.com','diodiojdijHUdknjdkksgYGjnsksjiJnsjjsnjHHS');




DROP TABLE IF EXISTS habits;

CREATE TABLE habits(
    id serial PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    updated_date DATE NOT NULL,
    frequency INT NOT NULL,
    due_date DATE NOT NULL,
    streak INT,
    users_id int REFERENCES users(id)
);


INSERT INTO habits (name, updated_date, frequency, due_date, streak, users_id)
VALUES
    ('Gym', '2021-01-20', 1, '2021-01-21', 2, 1);



