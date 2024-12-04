// Get elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');

// Sample data (this simulates data fetched from a server)
const events = [
    { name: "Music Concert", location: "Central Park", category: "Music" },
    { name: "Tech Meetup", location: "Downtown", category: "Technology" },
    { name: "Art Exhibition", location: "Gallery Lane", category: "Art" },
    { name: "Food Festival", location: "Riverside", category: "Food" }
];

// Search function
function searchEvents() {
    const query = searchInput.value.toLowerCase().trim();
    searchResults.innerHTML = ""; // Clear previous results

    if (query === "") {
        searchResults.innerHTML = "<p>Please enter a search term.</p>";
        return;
    }

    const filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query)
    );

    if (filteredEvents.length === 0) {
        searchResults.innerHTML = "<p>No results found.</p>";
    } else {
        const resultsHtml = filteredEvents.map(event => `
            <div class="result">
                <h3>${event.name}</h3>
                <p>Location: ${event.location}</p>
                <p>Category: ${event.category}</p>
            </div>
        `).join("");
        searchResults.innerHTML = resultsHtml;
    }
}

// Event listener for the search button
searchBtn.addEventListener('click', searchEvents);

// Optionally handle "Enter" key press
searchInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        searchEvents();
    }
});
