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
