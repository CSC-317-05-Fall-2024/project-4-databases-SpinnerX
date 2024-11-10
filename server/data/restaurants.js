import {pool} from "../config/database.js";

export async function getRestaurant() {
  try {
    const result = await pool.query('SELECT * FROM restaurants'); // Query to fetch all restaurants
    return result.rows;  // Return the rows 
  }
    catch (error) {
    console.error('Error fetching restaurants:', error);
    throw error;
  }
}

export async function getAllRestaurantReviews(){
    try{
        const res = await pool.query('SELECT * FROM reviews');
        return res.rows;
    }
    catch(error){
        console.error(`Error fetching reviews ${error}`);
        throw error;
    }
}


// Create a new restaurant entry
export async function createRestaurant(newRestaurant){
    const { name, phone, address, photo } = newRestaurant;
    try{
        const result = await pool.query('INSERT INTO restaurants (name, phone, address, photo) VALUES ($1, $2, $3, $4) RETURNING *', [name, phone, address, photo]);
        return result.rows[0];
    }
    catch(error){
        console.error(`Error creating restaurant: ${error}`);
    }
};

// Delete a restaurant by id
export async function deleteRestaurant(id){
    try {
        const results = await pool.query('DELETE FROM restaurants WHERE id = $1', [id])
        return results.rowCount;
    }
    catch (error) {
        console.error( error.message )
    }
};

export async function getRestaurantReview(id){
    try{
        const results = await pool.query('SELECT rating, content FROM reviews WHERE restaurant_id = $1',[id]);
        return results.rows;
    }
    catch(error){
        console.error(`Error Message: ${error.message}`);
    }
};
