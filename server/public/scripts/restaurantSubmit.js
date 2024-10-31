// Function to be called when the button is clicked

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Target the button by its ID
   
    // Add a click event listener to the button
   
    const form = document.getElementById('restaurantForm');
    form.addEventListener('submit', function(event){
        event.preventDefault();

        // console.log("Submit Clicked!");

        const name = document.getElementById('restaurantName').value;
        const phone = document.getElementById('phoneNumber').value;
        const address = document.getElementById('address').value;
        const photoUrl = document.getElementById('photoUrl').value || 'https://picsum.photos/200/300'; // Fallback image

        fetch('/api/new_restaurants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name, address, phone, photoUrl
            }),
        }).then(response => {
            return response.json();
        }).then(data => {
            // console.log(data);
            window.location.href = `/new_restaurants/{data.id}`;
        }).catch(error => {
            console.error('error:', error);
        });

       this.reset();

    });


    const container = document.querySelector('.cardContainer');
    const spans = document.querySelectorAll('span');
    
        for(let span of spans){
            console.log(span.id);
        }

});
