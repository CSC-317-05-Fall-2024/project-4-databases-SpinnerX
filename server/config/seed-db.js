/* Initialize the data in the DB */
import { pool } from './database.js';

// essentially just removing table from restaurant in this data format [restaurant, review]
const dropTables = async () => {
    try {
        console.log('dropping tables...');
        const dropTablesQuery = `
            DROP TABLE IF EXISTS reviews;
            DROP TABLE IF EXISTS restaurants;
        `;
        await pool.query(dropTablesQuery);
    } catch (error) {
        console.log(error)
    }
}

// creating table per restaurant
const createTables = async () => {
    try {
        console.log('creating restaurants...');
        const createQuery = `
            CREATE TABLE IF NOT EXISTS restaurants (
                id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                name TEXT NOT NULL,
                phone TEXT NOT NULL,
                address TEXT NOT NULL,
                photo TEXT
            );
            CREATE TABLE IF NOT EXISTS reviews (
                id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                rating INT NOT NULL,
                content TEXT NOT NULL,
                restaurant_id INT NOT NULL,
                FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE
            );
        `;
        await pool.query(createQuery);
        console.log('created restaurants and reviews');
    } catch (error) {
        console.log(error)
    }
}

// inserting all of our data to the database
const insertData = async () => {
    try {
        console.log('adding initial data...');
        const insertQuery = `
            INSERT INTO restaurants (name, phone,address, photo) VALUES ('McDonalds', '(123) 456-9000', '1965 Hollow Way San Francisco, United States', 'https://picsum.photos/200/200');
            INSERT INTO reviews (rating, content,restaurant_id) VALUES (5, 'This is a testing review.', 1);
            INSERT INTO reviews (rating, content,restaurant_id) VALUES (1, 'Just to eat. Not the best place.', 1);

            INSERT INTO restaurants (name, phone, address, photo) VALUES ('Wendys', '(246) 891-2455', 'Fifth Street, United States', 'https://picsum.photos/200/300');  
            INSERT INTO reviews (rating, content, restaurant_id) VALUES (5, 'This is the second review.', 2);
            INSERT INTO reviews (rating, content, restaurant_id) VALUES (3, 'This review is alright.', 2);

            INSERT INTO restaurants (name, phone, address, photo) VALUES ('Dennys', '(369) 124-4688', 'Ninth Street, United States', 'https://picsum.photos/200/300');
            INSERT INTO reviews (rating, content, restaurant_id) VALUES (3, 'Some decent food', 3);
            INSERT INTO reviews (rating, content, restaurant_id) VALUES (4, 'Good customer service', 3);
        `;
        await pool.query(insertQuery);
    } catch (error) {
        console.log(error)
    }
}

const setup = async () => {
    await dropTables();
    await createTables();
    await insertData();
}

setup();
