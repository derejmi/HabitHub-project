-- DROP TABLE IF EXISTS users;

-- CREATE TABLE users(
--     id serial PRIMARY KEY,
--     username VARCHAR(200) NOT NULL,
--     email VARCHAR(200) NOT NULL,
--     password VARCHAR(100) NOT NULL
-- );

INSERT INTO users (username,email,password)
VALUES
    ('User2','user@gmail.com','$2a$10$v5feHH7KyYaneZW.hMdjMe9bG.nq.Ih1I/eZJIQM0vtFiYCsmtxVS');




-- DROP TABLE IF EXISTS habits;

-- CREATE TABLE habits(
--     id serial PRIMARY KEY,
--     name VARCHAR(200) NOT NULL,
--     updated_date DATE NOT NULL,
--     streak INT,
--     users_id int 
-- );


INSERT INTO habits (name, updated_date, streak, users_id)
VALUES
    ('Exercise', '2020-01-02', 1, 2);



