# Interactive Image Display with Hover Effect

This project showcases an interactive image display feature that enhances the user experience by revealing a fixed image when hovering over an element. It utilizes basic JavaScript DOM manipulation and CSS to create a smooth hover effect that changes the background image of a fixed container.

## Features

- **Hover Effects**: When hovering over elements, a fixed container becomes visible with a background image corresponding to the hovered element.
- **Interactive Background**: Each element triggers a change in the background image of a fixed container, based on the `data-image` attribute of the element.
- **Smooth Transitions**: Smooth transitions are created when entering and leaving the hover state, making the interaction seamless.

## Installation

To integrate this feature into your project, follow these steps:

1. Clone or download the repository.
2. Add the JavaScript file to your project directory.
3. Ensure that the HTML contains the following elements:
    - An element with the ID `#elem-container`, which will trigger the hover effect.
    - A fixed container with the ID `#fixed-image` to display the background image on hover.
    - Multiple elements with the class `.elem`, each containing a `data-image` attribute for the background image.

## JavaScript Code

```javascript
// Variable Definitions
var eleM = document.querySelector("#elem-container");
var fiXed = document.querySelector("#fixed-image");

// Event listener to show the fixed image container on hover
eleM.addEventListener("mouseenter", function () {
    fiXed.style.display = "block";
});

// Event listener to hide the fixed image container when the mouse leaves
eleM.addEventListener("mouseleave", function () {
    fiXed.style.display = "none";
});

// Iterate through each element with class '.elem'
var elems = document.querySelectorAll(".elem");
elems.forEach(function(e) {
    // Add event listener to change background image on hover
    e.addEventListener("mouseenter", function() {
        var image = e.getAttribute("data-image");
        fiXed.style.backgroundImage = `url(${image})`;
    });
});



This `README.md` provides an overview of the functionality of the JavaScript file, installation instructions, code examples, and usage guidelines. Let me know if you need any adjustments or further details!
