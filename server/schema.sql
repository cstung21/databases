CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(25),
  PRIMARY KEY (id)
);


CREATE TABLE chatrooms (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  room_name VARCHAR(25),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT,
  text VARCHAR(255),
  chatroom_id INT,
  created_at DATETIME,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (chatroom_id) REFERENCES chatrooms(id)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

