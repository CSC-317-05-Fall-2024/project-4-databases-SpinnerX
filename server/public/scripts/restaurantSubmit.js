// Function to be called when the button is clicked



// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Target the button by its ID
    console.log("Reloaded DOM");
    // Add a click event listener to the button
   
    const form = document.getElementById('restaurantForm');
    form.addEventListener('submit', async function(event){
        event.preventDefault();
        console.log("Submit Clicked!");

        // console.log("Submit Clicked!");

        const name = document.getElementById('restaurantName').value;
        const phone = document.getElementById('phoneNumber').value;
        const address = document.getElementById('address').value;
        const photoUrl = document.getElementById('photoUrl').value || 'https://picsum.photos/200/300'; // Fallback image

        try {
            const response = await fetch('api/restaurants', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, address, phone, photoUrl}),
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


    // const container = document.querySelector('.cardContainer');
    // const spans = document.querySelectorAll('span');
    
    //     for(let span of spans){
    //         console.log(span.id);
    //     }

});
