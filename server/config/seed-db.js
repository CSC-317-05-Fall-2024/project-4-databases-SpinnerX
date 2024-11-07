/* Initialize the data in the DB */
import { pool } from './database.js';

// const dropTables = async () => {
//     console.log("Dropping Tables...");
//     try {
//         const dropTablesQuery = `
//             DROP TABLE IF EXISTS restaurants;
//         `;
//         await pool.query(dropTablesQuery);
//     } catch (error) {
//         console.log(error)
//     }
// }

// const createTables = async () => {
//     console.log("Creating Table...");
//     try {
//     } catch (error) {
//         console.log(error)
//     }
// }

const createTables = async () => {
    try {
        console.log('creating restaurants table...');
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
        console.log('created restaurants table');

    } catch (error) {
        console.log(error)
    }
}

// const insertData = async () => {
//     console.log("Inserting Data...");
//     try {
//     } catch (error) {
//         console.log(error)
//     }
// }

const setup = async () => {
    // await dropTables();
    await createTables();
    // await insertData();
}

setup();
