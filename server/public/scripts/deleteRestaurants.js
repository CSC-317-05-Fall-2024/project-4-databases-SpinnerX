
document.addEventListener('DOMContentLoaded', () => {
    console.log("Reloaded restaurants");
    
    //! @note Make sure we query all of our delete buttons specify by class='<class-id>' tag (look into the .ejs for specifications)
    const remove_button = document.querySelectorAll('.deleteBtn');
        
    remove_button.forEach(button => {
        button.addEventListener('click', async function(event){
            const button = event.target;
            const id = button.id;

            if(id){
                try{
                    const response = await fetch(`/api/restaurants/:${id}`, {
                        method: 'DELETE'
                    });

                    if (response.ok) {
                        button.closest('.restaurant-grid').remove();  
                        console.log(`Restaurant with ID ${id} deleted successfully.`);
                        
                        //! @note Used for reloading the current window.
                        // window.location.reload();
                    } else {
                        console.error(`Failed to delete restaurant with ID ${id}.`);
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            }
    
        });
    });
});

