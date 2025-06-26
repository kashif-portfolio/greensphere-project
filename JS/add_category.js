// add_category.js

document.getElementById("addCategoryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const categoryName = document.getElementById("categoryName").value;
    const categoryDescription = document.getElementById("categoryDescription").value;

    // Simulate adding category (in real life, save it to the database)
    alert(`Category added successfully! Name: ${categoryName}, Description: ${categoryDescription}`);

    // Optionally redirect or reset the form
    // window.location.href = "admin_dashboard.html";  // Uncomment to redirect
});
