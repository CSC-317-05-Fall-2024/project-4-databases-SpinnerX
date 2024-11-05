let restaurantData = [
    {
        "id": 0,
        "name": "HogWars",
        "phone": "123-456-7891",
        "address": "sfsu-address",
        "photo": "https://picsum.photos/200/300"
    },
    {
        "id": 1,
        "name": "BearDiner",
        "phone": "789-123, 4567",
        "address": "funny-address",
        "photo": "https://picsum.photos/200/300"
    },
    {
        "id": 2,
        "name": "BurgerDiner",
        "phone": "567-891-2345",
        "address": "sfsu-address",
        "photo": "https://picsum.photos/200/300"
    }
];

let lastId = restaurantData.length-1;

const getNextId = () => {
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
    return restaurantData;
};


// Get a restaurant by id
const getRestaurant = (id) => {
    return restaurantData.find(restaurant => restaurant.id == id);
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
    const new_restaurant_data = {
        id: getNextId(),
        ...newRestaurant
    }

    restaurantData.push(new_restaurant_data);
    return new_restaurant_data;
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
    const toDelete = restaurantData.find(restaurant => restaurant.id != id);

    if(!toDelete){
        throw Error(`Restaurant ${id} was not found!`);
    }

    // restaurantData = restaurantData.filter(restaurant => restaurant.id != id);
    return toDelete;
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };
