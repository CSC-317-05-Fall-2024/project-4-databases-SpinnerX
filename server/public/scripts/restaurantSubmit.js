// Function to be called when the button is clicked

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Target the button by its ID
    // const myButton = document.getElementById('myButton');
    // myButton.addEventListener('click', onSubmit);
    
    // Add a click event listener to the button
   
    const form = document.getElementById('restaurantForm');
    form.addEventListener('submit', function(event){
        event.preventDefault();

        console.log("Submit Clicked!");

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
            console.log(data);
            window.location.href = `/new_restaurants/{data.id}`;
        }).catch(error => {
            console.error('error:', error);
        });

        // const cardContainer = document.getElementById('cardContainer');

        // const card = document.createElement('div');
        // card.className = 'card';
        // card.innerHTML = `
        //     <img src="${photoUrl}" alt="Restaurant Photo">
        //     <div class="card-content">
        //     <p>${name}</p>
        //     <p>${address}</p>
        //     <p>${phone}</p>
        //     <!-- This is a button that will be used to remove the element from the parent element-->
        //     <span class="remove-btn" onclick="this.parentElement.parentElement.remove()">X</span>
        //     </div>
        //     `;

        // cardContainer.appendChild(card);

        // Reset the form
        this.reset();

    });
    // Target the button by its ID
    
});

// document.getElementById('restaurantForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.getElementById('restaurantName').value;
//     const phone = document.getElementById('phoneNumber').value;
//     const address = document.getElementById('address').value;
//     const photoUrl = document.getElementById('photoUrl').value || 'https://picsum.photos/200/300'; // Fallback image

//     const cardContainer = document.getElementById('cardContainer');

//     const card = document.createElement('div');
//     card.className = 'card';
//     card.innerHTML = `
//         <img src="${photoUrl}" alt="Restaurant Photo">
//         <div class="card-content">
//         <p>${name}</p>
//         <p>${address}</p>
//         <p>${phone}</p>
//         <!-- This is a button that will be used to remove the element from the parent element-->
//         <span class="remove-btn" onclick="this.parentElement.parentElement.remove()">X</span>
//         </div>
//         `;

//     cardContainer.appendChild(card);

//     // Reset the form
//     this.reset();
// });



