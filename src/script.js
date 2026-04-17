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
const infoText = document.querySelector(".info-text");
const noticeIcon = document.querySelectorAll("#errorUpload svg path");

// Get element to upload and remove avatar
const uploadImage = document.querySelector(".upload-image");
const uploadAvatar = document.querySelector("#uploadAvatar");
const uploadInstructions = document.querySelector(".upload-instructions");

// Get element to show result
const ticketResult = document.querySelector("#generatorResult");
const fullName = document.querySelector(".user-fullname");
const userAvatar = document.querySelector("#userAvatar");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const userEmail = document.querySelector("#userEmail");
const githubUsername = document.querySelector(".github-username");
const ticketEventDate = document.querySelector(".ticket-event-date");
const ticketNumber = document.querySelector("#number");

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
    uploadAvatar.classList.add("focus");
}

function dragleave() {
    uploadAvatar.classList.remove("focus");
}

function drop(e) {
    e.preventDefault();

    uploadAvatar.classList.remove("focus");

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

// Path url
const defaultUrl = uploadImage.src;
let url;

// update image
function updateImage(file) {
    // Create a URL for the uploaded file
    url = URL.createObjectURL(file);

    // Update the image source to the uploaded file
    uploadImage.src = url;
    uploadImage.style.padding = "0";

    // Hide the upload instructions and show the remove button
    uploadInstructions.classList.add("hidden");
    uploadAvatar.querySelector(".upload-actions").classList.remove("hidden");
}

// Remove avatar
function removeImage() {
    inputFile.value = "";
    URL.revokeObjectURL(url);

    // Reset url of image to default and add padding
    uploadImage.src = defaultUrl;
    uploadImage.style.padding = "0.5rem";

    // Hide the remove button and show the upload instructions
    uploadAvatar.querySelector(".upload-actions").classList.add("hidden");
    uploadInstructions.classList.remove("hidden");
}

// Change avatar
function changeImage() {
    inputFile.click();
}

// Check input is typing
[fullNameInput, emailInput, githubInput].forEach((input) => {
    input.addEventListener("input", (e) => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const checkNumberOnString = /\d+/g;

        if (!e || !e.target) return;

        // full name
        if (e.target.id === "fullName") {
            if (e.target.value.trim() === "" || checkNumberOnString.test(e.target.value)) {
                showError(false, "name", "inputFullName");
            } else {
                resetError();
            }
        }

        // email
        if (e.target.id === "email") {
            if (!regexEmail.test(e.target.value) || e.target.value.trim() === "") {
                showError(false, "email", "inputEmail");
            } else {
                resetError();
            }
        }

        // github
        if (e.target.id === "github") {
            if (e.target.value.trim() === "" || e.target.value.includes(" ")) {
                showError(false, "github", "inputGithub");
            } else {
                resetError();
            }
        }
    });
});

// Check value of input
function checkInputValue() {
    // Get value
    const [inputName, inputEmail, inputGithub] = [fullNameInput.value, emailInput.value, githubInput.value];

    if (updateImage.src === defaultUrl && inputName === "" && inputEmail === "" && inputGithub === "") {
        showError(true, "", "inputFullName", "inputEmail", "inputGithub");
        return false;
    }

    if (uploadImage.src === defaultUrl) {
        showError(true, "");
        return false;
    } else if (inputName === "") {
        showError(false, "", "inputFullName");
        return false;
    } else if (inputEmail === "") {
        showError(false, "", "inputEmail");
        return false;
    } else if (inputGithub === "") {
        showError(false, "", "inputGithub");
        return false;
    } else {
        return [inputName, inputEmail, inputGithub];
    }
}

// Generate ticket
function generateTicket() {
    const result = checkInputValue();

    if (!result) return;

    const [inputName, inputEmail, inputGithub] = result;

    // Destructure the result array to get name, email, and GitHub account
    const name = inputName;
    const email = inputEmail;
    const githubAccount = inputGithub;

    // Split the name into an array of words and get the first two words as the first and last name
    let splitName = name.split(" ");

    // Just take index 0 and 1 from the array
    firstName.textContent = splitName.slice(0, 1);
    lastName.textContent = splitName.slice(1, 2);

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
    userAvatar.src = uploadImage.src;

    // Update the text content
    fullName.textContent = name;
    userEmail.textContent = email;
    githubUsername.textContent = `@${githubAccount.toLowerCase()}`;
    ticketEventDate.textContent = `${date} / Austin, TX`;
    ticketNumber.textContent = `${Math.floor(Math.random() * 90000 + 10000)}#`;
}

// Message for file upload and input fields
const messageError = {
    defaultMessageUpload: "Upload your photo (JPG or PNG, max 500KB).",
    fileLarge: "File too large. Please upload under 500KB.",
    nameError: "Name cannot include a number.",
    emailError: "Please enter a valid email address.",
    githubError: "GitHub account cannot include space.",
};

// Show error
function showError(errorUpload = false, message = "", ...elementsID) {
    // For file upload
    if (errorUpload) {
        infoText.classList.add("error-text");
        noticeIcon.forEach((icon) => icon.classList.add("error-icon"));
        if (message === "fileLarge") {
            infoText.textContent = messageError.fileLarge;
        }
    }

    // For message
    if (message === "name") {
        errorInputFullName.querySelector(".notice-text").textContent = messageError.nameError;
    } else if (message === "email") {
        errorInputEmail.querySelector(".notice-text").textContent = messageError.emailError;
    } else if (message === "github") {
        errorInputGithub.querySelector(".notice-text").textContent = messageError.githubError;
    }

    // For input fields
    elementsID.forEach((id) => {
        if (id === "inputFullName") {
            errorInputFullName.classList.remove("hidden");
            fullNameInput.classList.add("error-input");
        } else if (id === "inputEmail") {
            errorInputEmail.classList.remove("hidden");
            emailInput.classList.add("error-input");
        } else if (id === "inputGithub") {
            errorInputGithub.classList.remove("hidden");
            githubInput.classList.add("error-input");
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

    // Remove error input border
    fullNameInput.classList.remove("error-input");
    emailInput.classList.remove("error-input");
    githubInput.classList.remove("error-input");
}
