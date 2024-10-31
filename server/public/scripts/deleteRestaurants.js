document.addEventListener('DOMContentLoaded', () => {
    // Target the button by its ID
   
    // Add a click event listener to the button
    
     const form = document.getElementById('restaurantForm');

    form.addEventListener('remove', function(event){
        console.log("Removed Clicked!");
    });

});
