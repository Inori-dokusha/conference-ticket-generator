// Get elements
const generateTicketButton = document.querySelector("#generate");
const ticketForm = document.querySelector(".ticket-form");
const avatarUpload = document.querySelector("#uploadAvatar");
const inputField = document.querySelectorAll(".input-field");
const inputFile = document.querySelector("#avatar");
const fullNameInput = document.querySelector("#fullName");
const emailInput = document.querySelector("#email");
const githubInput = document.querySelector("#github");
const errorNotice = document.querySelector(".error-notice");
const noticeText = document.querySelector(".notice-text");
const infoText = document.querySelector(".info-text");
const noticeIcon = document.querySelector("svg");
const uploadImage = document.querySelector(".upload-image");
const removeImageButton = document.querySelector("#btnRemove");
const changeImageButton = document.querySelector("#btnChange");
const uploadInstructions = document.querySelector(".upload-instructions");
const ticketResult = document.querySelector("#generatorResult");
const fullName = document.querySelector(".user-fullname");
const ticketDate = document.querySelector(".ticket-date");
const userAvatar = document.querySelector("#userAvatar");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const userEmail = document.querySelector("#userEmail");
const githubUsername = document.querySelector(".github-username");
const ticketEventDate = document.querySelector(".ticket-event-date");
const ticketNumber = document.querySelector("#number");

// Event to change and remove image after upload
removeImageButton.addEventListener("click", removeImage);
changeImageButton.addEventListener("click", changeImage);

// Event to generate ticket
generateTicketButton.addEventListener("click", generateTicket);

// variable as signs
let isEventAdded = false;

// function to add event
function addEvent() {
  if (isEventAdded) return;
  inputFile.addEventListener("change", handleFiles);
  avatarUpload.addEventListener("click", clickInputFile);
  avatarUpload.addEventListener("dragover", dragover);
  avatarUpload.addEventListener("dragleave", dragleave);
  avatarUpload.addEventListener("drop", drop);

  isEventAdded = true;
}

window.onload = addEvent();

// Upload image
function clickInputFile() {
  inputFile.click();
}

function handleFiles() {
  const file = this.files[0];

  if (!file) return;

  checkFileSize(file);
}

function dragover(e) {
  e.preventDefault();
  avatarUpload.classList.add("focus");
}

function dragleave() {
  avatarUpload.classList.remove("focus");
}

function drop(e) {
  e.preventDefault();

  avatarUpload.classList.remove("focus");

  const file = e.dataTransfer.files[0];

  if (!file) return;

  checkFileSize(file);
}

// Check file size
function checkFileSize(file) {
  // Check if the file size is greater than 500KB (500 * 1024 bytes)
  if (file.size / 1024 > 500) {
    showError();
  } else {
    updateImage(file);
  }
}

// update image
function updateImage(file) {
  // Create a URL for the uploaded file
  const url = URL.createObjectURL(file);

  // Save to local storage
  localStorage.setItem("url", url);

  // Update the image source to the uploaded file
  uploadImage.src = url;
  uploadImage.style.padding = "0";

  // Hide the upload instructions and show the remove button
  uploadInstructions.classList.add("hidden");
  removeImageButton.parentElement.classList.remove("hidden");
}

// Remove avatar
function removeImage() {
  // Remove the URL from local storage
  localStorage.removeItem("url");

  // Reset the image source to the default upload icon
  uploadImage.src = "./assets/images/icon-upload.svg";
  uploadImage.style.padding = "0.5rem";

  // Hide the remove button and show the upload instructions
  removeImageButton.parentElement.classList.add("hidden");
  uploadInstructions.classList.remove("hidden");
}

// Change avatar
function changeImage() {
  handleFiles();
}

// Validate input
function validateInput() {
  if (fullNameInput.value === "") {
    showError(fullNameInput);
    return false;
  }
  if (emailInput.value === "") {
    showError(emailInput);
    return false;
  }
  if (githubInput.value === "") {
    showError(githubInput);
    return false;
  } else {
    return [fullNameInput.value, emailInput.value, githubInput.value];
  }
}

// Generate ticket
function generateTicket() {
  // Get value
  const result = validateInput();

  if (result !== false) {
    // Destructure the result array to get name, email, and GitHub account
    let name = result[0];
    let email = result[1];
    let githubAccount = result[2];

    // Split the name into an array of words and get the first two words as the first and last name
    let splitName = name.split(" ");

    // Format the date options
    const option = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    // Get the current date and format it using the specified options
    const date = new Date().toLocaleDateString("en-US", option);

    // Hide the ticket form and show the generator result
    ticketForm.classList.add("hidden");
    ticketResult.classList.remove("hidden");

    // Get the image URL from local storage and update the user avatar source
    const imageUrl = localStorage.getItem("url");
    userAvatar.src = imageUrl;

    // Update the text content of the first name, last name, full name, email, GitHub account, ticket event date, and ticket number elements
    firstName.textContent = splitName[0];
    lastName.textContent = splitName[1];
    fullName.textContent = name;
    userEmail.textContent = email;
    githubUsername.textContent = `@${githubAccount.toLowerCase()}`;
    ticketEventDate.textContent = `${date} / Austin, TX`;
    ticketNumber.textContent = `${Math.floor(Math.random() * 90000 + 10000)}#`;

    // Disable event listeners after generating the ticket
    isEventAdded = false;
  }
}

// Show error
function showError(elementID) {
  if (inputField[0].id === elementID && elementID === "inputFullName") {
    console.log(0);
  } else if (inputField[1].id === elementID && elementID === "inputEmail") {
    console.log(1);
  } else if (inputField[2].id === elementID && elementID === "inputGithub") {
    console.log(2);
  }
}

showError("inputEmail");
showError("inputFullName");
showError("inputGithub");
