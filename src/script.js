const btnGenerate = document.querySelector("#generate");
const ticketForm = document.querySelector(".ticket-form");
const avatarUpload = document.querySelector("#uploadAvatar");
const inputFile = document.querySelector("#avatar");
const inputName = document.querySelector("#fullName");
const inputEmail = document.querySelector("#email");
const inputGitHub = document.querySelector("#github");
const errorNotice = document.querySelector(".error-notice");
const noticeText = document.querySelector(".notice-text");
const infoText = document.querySelector(".info-text");
const noticeIcon = document.querySelector("svg");
const uploadImage = document.querySelector(".upload-image");
const btnRemove = document.querySelector("#btnRemove");
const btnChange = document.querySelector("#btnChange");
const uploadInstructions = document.querySelector(".upload-instructions");
const generatorResult = document.querySelector("#generatorResult");
const fullName = document.querySelector(".user-fullname");
const ticketDate = document.querySelector(".ticket-date");
const userAvatar = document.querySelector("#userAvatar");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const userEmail = document.querySelector("#userEmail");
const userAccountGithub = document.querySelector(".github-username");
const ticketEventDate = document.querySelector(".ticket-event-date");
const numberTicket = document.querySelector("#number");

// Event to change and remove image after upload
btnRemove.addEventListener("click", removeImage);
btnChange.addEventListener("click", changeImage);

// Event to generate ticket
btnGenerate.addEventListener("click", generateTicket);

// variable as signs
let isEventAdded = true;

// function to add event
function addEvent() {
  if (isEventAdded) {
    inputFile.addEventListener("change", handleFiles);
    avatarUpload.addEventListener("click", clickInputFile);
    avatarUpload.addEventListener("dragover", dragover);
    avatarUpload.addEventListener("dragleave", dragleave);
    avatarUpload.addEventListener("drop", drop);

    isEventAdded = false;
  }
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
  const fileSize = file.size;
  const maxSizeKB = 500;
  const fileSizeKB = fileSize / 1024;

  if (fileSizeKB > maxSizeKB) {
    showError(false);
  } else {
    updateImage(file);
  }
}

// update image
function updateImage(image) {
  const url = URL.createObjectURL(image);

  // Save to local storage
  localStorage.setItem("url", url);

  uploadImage.src = url;
  uploadImage.style.padding = "unset";
  uploadInstructions.classList.add("hidden");

  btnRemove.parentElement.classList.remove("hidden");
}

// Remove avatar
function removeImage() {
  uploadImage.src = "./assets/images/icon-upload.svg";
  uploadImage.style.padding = "0.5rem";

  btnRemove.parentElement.classList.add("hidden");

  uploadInstructions.classList.remove("hidden");
}

// Change avatar
function changeImage() {
  handleFiles();
}

// Check user input
function userInput() {
  const elements = [inputName, inputEmail, inputGitHub];

  let result = [];

  for (const el of elements) {
    if (el.value === "") {
      showError(inputName);
    } else {
      result.push(el.value);
    }
  }

  return result;
}

// Generate ticket
function generateTicket() {
  // Get value
  const result = userInput();

  if (!result.length === 0) {
    // Sign in value
    let name = result[0];
    let email = result[1];
    let githubAccount = result[2];

    // split name from the array
    let splitName = name.split(" ");
    let resultSplitName;

    if (splitName.length > 2) {
      resultSplitName = splitName.splice(0, 2);
    }

    // Setting format time
    const option = {
      year: "numeric",
      month: "short",
      day: "numeric"
    };

    // Set output to MMM-DD-YYYY
    const date = new Date().toLocaleDateString("en-US", option);

    // Update html
    ticketForm.classList.add("hidden");
    generatorResult.classList.remove("hidden");

    // Get the url from local storage
    const imageUrl = localStorage.getItem("url");
    userAvatar.src = imageUrl;

    // Update elements
    firstName.textContent = splitName[0];
    lastName.textContent = splitName[1];
    fullName.textContent = name;
    userEmail.textContent = email;
    userAccountGithub.textContent = `@${githubAccount.toLowerCase()}`;
    ticketEventDate.textContent = `${date} / Austin, TX`;
    numberTicket.textContent = `${Math.floor(Math.random() * 90000 + 10000)}#`;

    // disable the event listener after generate the ticket
    addEvent(false);
  }
}

// Show error message
function showError(childElement) {
  if (childElement === inputName) {
    inputName.parentElement.classList.remove("hidden");
  } else if (childElement === inputEmail) {
    inputEmail.parentElement.classList.remove("hidden");
  } else if (childElement === inputGitHub) {
    inputGitHub.parentElement.classList.remove("hidden");
  } else {
    infoText.classList.add("error-text");
    noticeIcon.classList.add("error-icon");
  }
}
