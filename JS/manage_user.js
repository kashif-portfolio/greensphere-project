// manage_user.js

function deleteUser(userId) {
    if (confirm(`Are you sure you want to delete user with ID ${userId}?`)) {
        
        alert(`User with ID ${userId} deleted successfully.`);
        
        // Optionally, remove the deleted user's row from the table
        // document.getElementById(`user-${userId}`).remove(); // Uncomment to remove the user row dynamically
    }
}
