// all_orders.js

document.querySelectorAll(".update-status-btn").forEach(button => {       //Selects all buttons with the class name update-status-btn If there are multiple rows in the table, this ensures every button is selected.
    button.addEventListener("click", function () {                         //For each button, the callback function (inside addEventListener) will run when clicked.
        const orderId = this.parentElement.parentElement.cells[0].textContent; //this ka mtlb yha id h ar ye table main id ki value ko la ga
        const newStatus = prompt(`Update the status for Order ID ${orderId}:`);//hows a dialog box with a message and input field.
       // The user types the new status, which is saved in newStatus

        if (newStatus) {
            alert(`Order ID ${orderId} status updated to ${newStatus}`);
        }
    });
});
