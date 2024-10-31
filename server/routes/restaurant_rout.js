import express from 'express';
import {getRestaurant, getRestaurants, deleteRestaurant, createRestaurant} from '../data/restaurants.js';

const router = express.Router();

router.post('/restaurats', (req, res) => {
    const data = req.body;
    try {
        const restaurant = createRestaurant(data);
        console.log("received new restaurant!". data)
        res.status(200).json(restaurant)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message": `${error}`})
    }
});

router.delete('/restaurats/:id', (req, res) => {
    console.log("Restaurant Delete Called!");
    const id = parseInt(req.params.id);
    try {
        const restaurant = deleteRestaurant(id);
        res.status(200).json(restaurant)
    } catch (error) {
        res.status(500).json({"message": `${error}`})
    }
});

export { router as restaurantRouter };
