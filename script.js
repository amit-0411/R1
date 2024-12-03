// script.js

// Mock data for search results and stats (replace this with an API call in a real application)
const sampleData = [
    {
        name: "Party A",
        region: "North",
        popularity: 75,
        seats: 180,
        slogan: "Progress for All"
    },
    {
        name: "Party B",
        region: "South",
        popularity: 55,
        seats: 120,
        slogan: "Unity and Justice"
    },
    {
        name: "Party C",
        region: "West",
        popularity: 68,
        seats: 150,
        slogan: "For the People"
    },
    {
        name: "Party D",
        region: "East",
        popularity: 82,
        seats: 220,
        slogan: "Empowering Change"
    }
];

// Function to handle search button click
function performSearch() {
    const keyword = document.getElementById("keyword").value.toLowerCase();
    const politicalParty = document.getElementById("politicalParty").value;
    const region = document.getElementById("region").value;
    
    // Filter data based on search criteria
    const filteredData = sampleData.filter(party => {
        return (
            (party.name.toLowerCase().includes(keyword) || keyword === "") &&
            (party.region === region || region === "") &&
            (party.name === politicalParty || politicalParty === "")
        );
    });

    displayResults(filteredData);
}

// Function to display filtered results
function displayResults(data) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results

    if (data.length > 0) {
        data.forEach(item => {
            const resultDiv = document.createElement("div");
            resultDiv.className = "result";

            resultDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p><strong>Region:</strong> ${item.region}</p>
                <p><strong>Popularity:</strong> ${item.popularity}%</p>
                <p><strong>Seats:</strong> ${item.seats}</p>
                <p><strong>Slogan:</strong> "${item.slogan}"</p>
            `;

            resultsContainer.appendChild(resultDiv);
        });
    } else {
        resultsContainer.innerHTML = "<p>No results found for your search criteria.</p>";
    }
}

// Function to update stats
function updateStats() {
    const totalParties = sampleData.length;
    const totalSeats = sampleData.reduce((acc, party) => acc + party.seats, 0);
    const avgPopularity = (sampleData.reduce((acc, party) => acc + party.popularity, 0) / totalParties).toFixed(2);

    document.getElementById("totalParties").textContent = totalParties;
    document.getElementById("totalSeats").textContent = totalSeats;
    document.getElementById("avgPopularity").textContent = avgPopularity + "%";
}

// Event listeners
document.getElementById("searchButton").addEventListener("click", performSearch);
window.addEventListener("load", updateStats); // Update stats on page load




// JavaScript to show a popup or additional information when "Learn More" button is clicked
function showMoreInfo() {
    alert("PolitiTrade is the future of political engagement. Stay tuned for more exciting features!");
}
// function to perform slide show
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";  
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active";
// }
