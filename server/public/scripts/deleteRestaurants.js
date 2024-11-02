
document.addEventListener('DOMContentLoaded', () => {
    console.log("Reloaded restaurants");
    
    const remove_button = document.querySelectorAll('.deleteBtn');
    // const remove_button = document.querySelector('.deleteBtn');
    
    remove_button.forEach(button => {
        button.addEventListener('click', async function(event){
            console.log("Remove Button clicked!");
            const button = event.target;
            const id = button.dataset.id;
            console.log("ID:");
            console.log(id);

            if(id){
                try{
                    const response = await fetch(`/api/restaurants/:${id}`, {
                        method: 'Delete'
                    });

                    if (response.ok) {
                        button.closest('.restaurant-grid').remove();  
                        console.log(`Restaurant with ID ${id} deleted successfully.`);

                        window.location.reload();
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

