/* Initialize the data in the DB */
import { pool } from './database.js';

const dropTables = async () => {
    console.log("Dropping Tables...");
    try {
        const dropTablesQuery = `
            DROP TABLE IF EXISTS restaurants;
        `;
        await pool.query(dropTablesQuery);
    } catch (error) {
        console.log(error)
    }
}

const createTables = async () => {
    console.log("Creating Table...");
    try {
    } catch (error) {
        console.log(error)
    }
}

const insertData = async () => {
    console.log("Inserting Data...");
    try {
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
