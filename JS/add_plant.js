// add_plant.js

document.getElementById("addPlantForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const plantName = document.getElementById("plantName").value;
    const plantDescription = document.getElementById("plantDescription").value;
    const plantCategory = document.getElementById("plantCategory").value;
    const plantPrice = document.getElementById("plantPrice").value;
    const plantStock = document.getElementById("plantStock").value;
  

    // Simulate adding the plant to the database
    alert(`Plant added successfully!\nName: ${plantName}\nDescription: ${plantDescription}\nCategory: ${plantCategory}\nPrice: ${plantPrice}\nStock: ${plantStock}\nImage: ${plantImage}`);

   
});
