# Mars Rover Photo Explorer

This is a simple web app that lets users view photos taken by NASA’s Mars Rover on Mars for a specific date. The app uses NASA's Mars Rover Photos API to get and show these images.

## How the Code Works

1. **HTML Structure**: The main page (`index.html`) includes a date picker, a button, and a gallery area where photos are shown.
2. **JavaScript** (`script.js`):
   - **Event Listener**: The app waits for the user to pick a date and click "Load Photos."
   - **Fetching Data**: The `fetchPhotos` function sends a request to NASA’s API with the selected date. If photos are available, it sends them to `displayPhotos` to show them on the page.
   - **Displaying Photos**: The `displayPhotos` function creates an image element for each photo and adds it to the gallery. If no photos are available, it shows a message to let the user know.
3. **CSS Styling** (`styles.css`): Basic CSS styles are used to format the page and make the gallery look neat.

## Steps for Building This Project

1. **HTML Setup**: First, I created `index.html` with the date picker, button, and gallery section.
2. **JavaScript Setup**:
   - Added event listeners for the date input and button.
   - Created the `fetchPhotos` function to handle the API request.
3. **Photo Display**: I added `displayPhotos` to show the photos in the gallery.
4. **CSS Styling**: Styled the page in `styles.css` for a simple, clean layout.
5. **Testing**: Added console logs to check if each part worked correctly.

I built and tested each part step-by-step to keep everything organized.

## Challenges Faced

1. **Async Data**: Making sure photos only showed after the data was fully received from NASA’s API.
2. **Missing Photos**: Some dates didn’t have photos. I added code to show a message if no photos were available.
3. **Layout Issues**: The images didn’t display correctly at first, so I used CSS to fix this and keep the layout neat.

## Future Improvements

Some ideas to make this app better:

2. **Date Validation**: Only allow valid date selections based on the Mars Rover’s mission dates.
3. **Photo Zoom Feature**: Let users click to enlarge photos for better viewing.



