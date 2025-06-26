// customer_care.js

document.querySelectorAll(".respond-btn").forEach(button => {
    button.addEventListener("click", function() {
        const queryId = this.parentElement.parentElement.cells[0].textContent;
        const response = prompt(`Respond to Query ID ${queryId}:`); //Opens a popup asking the user to type their response.

        if (response) {
            alert(`Query ID ${queryId} responded: ${response}`);
        }
    });
});
