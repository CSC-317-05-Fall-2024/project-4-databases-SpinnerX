// Add your server code here.
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { restaurantRouter } from './routes/api.js';
import { getAllRestaurantReviews, getRestaurant } from './data/restaurants.js';

const app = express();

const PORT = process.env.PORT || 9000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

// Setting to using the ejs template!
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.json())
app.use("/api", restaurantRouter);

// acts as our entry point and our main to get responses from our server.
// where we upload index.html as our home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    console.log(req)
});

// new_restaurant page call (.html call)
// Is just going to be adding our new restaurants here.
app.get("/new_restaurant", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'new_restaurant.html'));
});

// restaurant page (.html call)
// Will be displaying all of our restaurants that are added and not the items deleted.
app.get('/restaurant', async (req, res) => {
    // this restaurant data is what will be uploaded and utilized by the .ejs file.
    const restaurantData = await getRestaurant();

    // used for rendering our reviews contents to restaurants.
    const restaurantReviews = await getAllRestaurantReviews();

    // Calculate the average rating for each restaurant
    // Mapping to all of our restaurants
    const totalAverageRestaurantReviews = restaurantData.map(restaurant => {
        // Get reviews specific to this restaurant
        const reviewsForRestaurant = restaurantReviews.filter(review => review.restaurant_id === restaurant.id);

        // Calculate the total rating and average rating
        const reviewCount = reviewsForRestaurant.length;
        const reviewTotal = reviewsForRestaurant.reduce((total, review) => total + review.rating, 0);
        const averageRating = reviewCount > 0 ? (reviewTotal / reviewCount) : 0;

        // Return an enhanced restaurant object with averageRating
        return {
            ...restaurant,
            averageRating: averageRating.toFixed(2) // format to 2 decimal places
        };
    });

    // Rendering to restaurants.ejs with our following data.
    res.render('restaurants', { restaurantData, restaurantReviews, totalAverageRestaurantReviews });

});

app.get('/restaurant/:id', async(req, res) => {
    const restaurantId = parseInt(req.params.id, 10); // parse ID from url.
    const restaurantData = await getRestaurant();
    const restaurantReviews = await getAllRestaurantReviews();

    const restaurant  = restaurantData.find(r => r.id === restaurantId); // Find restaurant by id

    if (!restaurant) {
        // Handle the case where the restaurant is not found
        return res.status(404).send('Restaurant not found');
    }

    // Filter reviews for the specific restaurant
    const reviewsForRestaurant = restaurantReviews.filter(review => review.restaurant_id === restaurantId);

    // Calculate total number of reviews
    const reviewCount = reviewsForRestaurant.length;

    // Optionally calculate average rating if needed
    const reviewTotal = reviewsForRestaurant.reduce((total, review) => total + review.rating, 0);
    const averageRating = reviewCount > 0 ? (reviewTotal / reviewCount) : 0;

    console.log(`Average Rating: ${averageRating}`);

    // const review = restaurantReviews.find(r => r.id === restaurantId);
    res.render('restaurantCard', { restaurant, restaurantReviews});
});

// attractions page (.html call)
app.get('/attractions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
