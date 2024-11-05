window.addEventListener("load", function() {
    const loadPhotosButton = document.getElementById('load-photos');
    const dateInput = document.getElementById('date-input');

    console.log("Page loaded");

    loadPhotosButton.addEventListener('click', function() {
        const selectedDate = dateInput.value;
        if (selectedDate) {
            console.log("Date selected:", selectedDate);
        } else {
            alert('Please select a date first.');
            console.log("No date selected");
        }
    });
});
const API_KEY = 'h08s2AsUTou9SVmFT9A6EyV0OnWUQSBF25uSorDy';

function fetchPhotos(date) {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${API_KEY}`;

    console.log("Fetching photos from NASA API");

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("Photos received from API:", data);
        })
        .catch(error => {
            console.log("Error fetching photos:", error);
        });
}
loadPhotosButton.addEventListener('click', function() {
    const selectedDate = dateInput.value;
    if (selectedDate) {
        console.log("Date selected:", selectedDate);
        fetchPhotos(selectedDate);
    } else {
        alert('Please select a date first.');
        console.log("No date selected");
    }
});

