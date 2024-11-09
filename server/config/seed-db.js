/* Initialize the data in the DB */
import { pool } from './database.js';

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

const createTables = async () => {
    try {
        console.log('creating restaurants...');
        const createQuery = `
            CREATE TABLE IF NOT EXISTS restaurants (
                id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                name TEXT NOT NULL,
                phone_number TEXT NOT NULL,
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

const insertData = async () => {
    try {
        console.log('adding initial data...');
        const insertQuery = `
        INSERT INTO restaurants (name, phone_number,address, photo) VALUES 
            ('McDonalds', '(123) 456-9000', '1965 Hollow Way San Francisco, United States', 'https://picsum.com/200/400');

        INSERT INTO reviews (rating, content,restaurant_id) VALUES (5, 'This is a testing review.', 1);
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
