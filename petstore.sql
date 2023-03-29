
-- 2. Create a new file petstore.sql. Create a pet store database, with 2 mySQL tables, pets and owners
-- . Each table should have at least 3 properties. Insert one pet and one owner into appropriate tables.


CREATE DATABASE candystore; 

-- Switch to candystore database
  USE candystore; 


-- Create the customers table:
CREATE TABLE pets (
  petId INT AUTO_INCREMENT PRIMARY KEY,
  petName VARCHAR(20) NOT NULL,
  ownerId VARCHAR(20) NOT NULL
);

CREATE TABLE owners (
  ownerId INT AUTO_INCREMENT PRIMARY KEY, 
  email VARCHAR(30) NOT NULL,
  firstName VARCHAR(20) NOT NULL,
  lastName VARCHAR(20) NOT NULL
);

