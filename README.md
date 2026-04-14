# Conference Ticket Generator

This project is a custom build of the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w).

## Table of contents

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [AI](#ai)

## Overview

### The challenge

Users should be able to:

- Upload an avatar image using drag-and-drop or by clicking the upload area
- Receive validation feedback for missing fields and invalid input
- See an error when the uploaded image is too large
- Enter a full name, email address, and GitHub username
- Generate a conference ticket preview after successful submission
- View a responsive layout on mobile and desktop
- Use keyboard navigation to interact with the form
- See focus and hover states on interactive controls

### Screenshot

<div style="display: flex; overflow-x: auto; gap: 10px;">
    <img src="./design/screenshots/mobile.png">
    <img src="./design/screenshots/after-upload-and-field-input.png">
    <img src="./design/screenshots/generate-ticket.png" width="600">
</div>

## Links

- Live Site URL: [Github Pages](https://inori-dokusha.github.io/conference-ticket-generator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Responsive mobile-first layout
- Vanilla JavaScript for interactivity
- Drag-and-drop file upload UI
- Form validation and dynamic DOM updates

### What I learned

In this project I practiced:

- building a custom file upload area with drag-and-drop support
- validating form fields in JavaScript and showing inline error messages
- using `URL.createObjectURL()` to preview uploaded images
- toggling content visibility with CSS utility classes like `.hidden`
- formatting dates with `toLocaleDateString()`
- generating a ticket number dynamically for the preview card

### Continued development

In future iterations I want to improve:

- better keyboard accessibility for the upload area
- stronger validation for GitHub usernames and avatar file types
- more accessible announcements for error states and success messages

### Useful resources

- [MDN Web Docs — Using files from web applications](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications)
- [CSS-Tricks — A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Youtube Wes Bos — Event Bubbling In JS](https://youtu.be/F1anRyL37lE?si=bfinRZsov-L_JkTU)

### AI

- Helped me create variable names in JS and class names in HTML

## Author

- Frontend Mentor - [@Inori-dokusha](https://www.frontendmentor.io/profile/Inori-dokusha)
- Instagram - [@leonardomnlu](https://www.instagram.com/leonardomnlu/)

## Acknowledgments

- Frontend Mentor for the challenge design and starter files
- The project assets and design guidance included in the starter code
