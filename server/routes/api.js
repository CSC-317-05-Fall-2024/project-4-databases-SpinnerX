import express from 'express';
import { createRestaurant, getRestaurant, deleteRestaurant } from '../data/restaurants.js';

const router = express.Router();

//  Route for posting the new restaurant onto the page.
router.post('/restaurants', async(req, res) => {
    console.log("Created New Restaurant");
    const newRestaurant = req.body;
    const createdRestaurant = await createRestaurant(newRestaurant);
    console.log(`CreatedRestaurant = ${createdRestaurant}`);
    res.status(201).json(createdRestaurant);
});

// Making sure that we can route to the website with that specific restaurant based on their ID.
router.get('/restaurants/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);  // Parse the ID from the URL
    console.log(`going to restaurant ID ${id} page!`);
    const restaurant = await getRestaurant(id);  // Get the restaurant by ID

    if (restaurant) {
        res.json(restaurant);  // Send the restaurant data as JSON
    }
    else {
        res.status(404).json({ message: 'Restaurant not found' });  // Send 404 if not found
    }
});
router.delete('/restaurants/:id', async (req, res) => {
    console.log("delete router called");
    const restaurantId = parseInt(req.params.id, 10);
    const isDeleted = await deleteRestaurant(restaurantId);
    
    if (isDeleted) {
        res.status(200).json({ message: 'Restaurant deleted successfully' });
    } else {
        res.status(404).json({ message: 'Restaurant not found' });
    }
});

export { router as restaurantRouter };
