
document.addEventListener('DOMContentLoaded', () => {
    console.log("Reloaded restaurants");
    
    //! @note Make sure we query all of our delete buttons specify by class='<class-id>' tag (look into the .ejs for specifications)
    const remove_button = document.querySelectorAll('.deleteBtn');
        
    remove_button.forEach(button => {
        button.addEventListener('click', function(){
            const restaurantCard = button.parentElement;

            const restaurantId = restaurantCard.getAttribute('data-id');

            fetch(`/api/restaurants/${restaurantId}`, {  
                method: 'DELETE'
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete restaurant');
                }
                restaurantCard.remove();  
            })
            .catch(error => {
                console.error('Error:', error);
            });


    
        });
    });
});

