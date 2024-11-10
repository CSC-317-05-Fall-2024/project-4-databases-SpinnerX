// Function to be called when the button is clicked



// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Target the button by its ID
    console.log("Reloaded DOM");
    
    // How we submit items to the restaurant website.
    const form = document.getElementById('restaurantForm');
    form.addEventListener('submit', async function(event){
        event.preventDefault();
        console.log("Submit Clicked!");

        const name = document.getElementById('restaurantName').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const photo = document.getElementById('photoUrl').value || 'https://picsum.photos/200/300'; // Fallback image

        try {
            const response = await fetch('api/restaurants', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, address, phone, photo}),
            });

            if (response.ok) {
                console.log("Restaurant created successfully!");

                window.location.href = '/new_restaurant';
            } else {
                console.error("Failed to create restaurant.");
            }
        } catch (error) {
            console.error('Error:', error);
        }


       this.reset();

    });
});



