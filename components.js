document.addEventListener("DOMContentLoaded", function() {
    // Function to load a component into an element ID
    function loadComponent(id, file) {
        fetch(file)
            .then(response => {
                if (!response.ok) throw new Error(`Could not load ${file}`);
                return response.text();
            })
            .then(data => {
                document.getElementById(id).innerHTML = data;
            })
            .catch(error => console.error("Error loading component:", error));
    }

    // Load header and footer
    loadComponent("header-container", "components/header.html");
    loadComponent("footer-container", "components/footer.html");
});

