window.addEventListener("load", function() {
    const loadPhotosButton = document.getElementById('load-photos');
    const dateInput = document.getElementById('date-input');
    const photoGallery = document.getElementById('photo-gallery'); 

    console.log("Page loaded");

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
});

// Added API key 
const API_KEY = 'h08s2AsUTou9SVmFT9A6EyV0OnWUQSBF25uSorDy';

//Added a funtion to fetch photos from NASA's API
function fetchPhotos(date) {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${API_KEY}`;

    console.log("Fetching photos from NASA API");

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("Photos received from API:", data);

            // updated function to call displayPhotos with the first three photos.
            const photos = data.photos.slice(0, 3);
            displayPhotos(photos);
        })
        .catch(error => {
            console.log("Error fetching photos:", error);
        });
}
// button click event to call fecthphotos function if a dste is selected.
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

// Added function to display photos in the gallery
function displayPhotos(photos) {
    const photoGallery = document.getElementById('photo-gallery');
    photoGallery.innerHTML = '';

    console.log("Displaying photos");

    photos.forEach((photo, index) => {
        const img = document.createElement('img');
        img.src = photo.img_src;
        img.alt = `Photo taken by ${photo.camera.full_name} on ${photo.earth_date}`;
        img.classList.add('photo');

        console.log(`Photo ${index + 1} added with src:`, img.src);

        photoGallery.appendChild(img);
    });
}



