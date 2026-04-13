// Get element generator button
const generateTicketButton = document.querySelector("#generate");

// Get element form
const ticketForm = document.querySelector("#ticketForm");

// Get error elements and input fields
const errorInputFullName = document.querySelector("#errorFullName");
const errorInputEmail = document.querySelector("#errorEmailAddress");
const errorInputGithub = document.querySelector("#errorGithubAccount");

// Get input fields
const inputFile = document.querySelector("#avatar");
const fullNameInput = document.querySelector("#fullName");
const emailInput = document.querySelector("#email");
const githubInput = document.querySelector("#github");

// Get element to show error message
const errorNotice = document.querySelector(".error-notice");
const noticeText = document.querySelector(".notice-text");
const infoText = document.querySelector(".info-text");
const noticeIcon = document.querySelectorAll("#errorUpload svg path");

// Get element to upload and remove avatar
const uploadImage = document.querySelector(".upload-image");
const uploadAvatar = document.querySelector("#uploadAvatar");
const uploadInstructions = document.querySelector(".upload-instructions");

// Get element to show result
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

// Check input is typing
[fullNameInput, emailInput, githubInput].forEach((input) => {
    input.addEventListener("input", validateInput);
});

// Event to generate ticket
generateTicketButton.addEventListener("click", generateTicket);

// Events for uploading images and button actions
uploadAvatar.addEventListener("click", (e) => {
    if (e.target.id === "uploadAvatar") {
        clickInputFile();
    } else if (e.target.id === "btnRemove") {
        removeImage();
    } else if (e.target.id === "btnChange") {
        changeImage();
    }
});

inputFile.addEventListener("change", handleFiles);
uploadAvatar.addEventListener("dragover", dragover);
uploadAvatar.addEventListener("dragleave", dragleave);
uploadAvatar.addEventListener("drop", drop);

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
        showError(true, "fileLarge");
    } else {
        resetError();
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
    uploadAvatar.classList.add("hidden");
    uploadInstructions.classList.remove("hidden");
}

console.log(uploadAvatar.children[2]);

// Change avatar
function changeImage() {
    inputFile.click();
}

// Validate input
function validateInput(e) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const checkNumberOnString = /\d+/g;

    if (!e || !e.target) return;

    if (e.target.id === "fullName") {
        if (e.target.value.trim() === "" || checkNumberOnString.test(e.target.value)) {
            showError(false, "nameError", "inputFullName");
            return false;
        } else {
            resetError();
        }
    } else if (e.target.id === "email") {
        if (!regexEmail.test(e.target.value) || e.target.value.trim() === "") {
            showError(false, "emailError", "inputEmail");
            return false;
        } else {
            resetError();
        }
    } else if (e.target.id === "github") {
        if (e.target.value.trim() === "") {
            showError(false, "inputGithub");
            return false;
        } else {
            resetError();
        }
    }
}

// Generate ticket
function generateTicket() {
    // Get value
    const [inputName, inputEmail, inputGithub] = [fullNameInput.value, emailInput.value, githubInput.value];

    const userAvatarUrl = localStorage.getItem("url");

    if (inputName === "" || inputEmail === "" || inputGithub === "" || !userAvatarUrl) {
        showError(true, "empty", "inputFullName", "inputEmail", "inputGithub");
        return;
    }

    if (userAvatarUrl === null) showError(true, "defaultMessageUpload");

    // Destructure the result array to get name, email, and GitHub account
    let name = inputName;
    let email = inputEmail;
    let githubAccount = inputGithub;

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

    // Get the user avatar from local storage
    userAvatar.src = localStorage.getItem("url");

    // Update the text content
    firstName.textContent = splitName[0];
    lastName.textContent = splitName[1];
    fullName.textContent = name;
    userEmail.textContent = email;
    githubUsername.textContent = `@${githubAccount.replaceAll(" ", "").toLowerCase()}`;
    ticketEventDate.textContent = `${date} / Austin, TX`;
    ticketNumber.textContent = `${Math.floor(Math.random() * 90000 + 10000)}#`;
}

// Message for file upload and input fields
const messageError = {
    defaultMessageUpload: "Upload your photo (JPG or PNG, max 500KB).",
    fileLarge: "File too large. Please uplaod under 500KB.",
    nameError: "Name cannot include a number.",
    emailError: "Please enter a valid email address.",
};

// Show error
function showError(errorUpload = false, message = "", ...elementsID) {
    // For file upload
    if (errorUpload) {
        infoText.classList.add("error-text");
        noticeIcon.forEach((icon) => icon.classList.add("error-icon"));
    }

    // For message
    if (message === "fileLarge") {
        infoText.textContent = messageError.fileLarge;
    } else if (message === "inputName") {
        errorInputFullName.children[1].textContent = messageError.nameError;
    } else if (message === "inputEmail") {
        errorInputEmail.children[1].textContent = messageError.emailError;
    }

    // For input fields
    elementsID.forEach((id) => {
        if (id === "inputFullName") {
            errorInputFullName.classList.remove("hidden");
        } else if (id === "inputEmail") {
            errorInputEmail.classList.remove("hidden");
        } else if (id === "inputGithub") {
            errorInputGithub.classList.remove("hidden");
        }
    });
}

// Reset error messages
function resetError() {
    noticeIcon.forEach((icon) => icon.classList.remove("error-icon"));

    infoText.textContent = messageError.defaultMessageUpload;

    infoText.classList.remove("error-text");
    errorInputFullName.classList.add("hidden");
    errorInputEmail.classList.add("hidden");
    errorInputGithub.classList.add("hidden");
}
