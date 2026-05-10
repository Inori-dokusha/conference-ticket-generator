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

// Check value of input while the button on click
function checkInputValue() {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const checkNumberOnString = /\d+/g;

  // Get value
  const [inputName, inputEmail, inputGithub] = [fullNameInput.value, emailInput.value, githubInput.value];

  if (uploadImage.src === defaultUrl || inputName === "" || inputEmail === "" || inputGithub === "") {
    showError(true, "", "inputFullName", "inputEmail", "inputGithub");
    return false;
  } else {
    return [inputName, inputEmail, inputGithub];
  }
}

// Message for file upload and input fields
const messages = {
  defaultMessageUpload: "Upload your photo (JPG or PNG, max size: 500KB).",
  fileLarge: "File too large. Please upload under 500KB.",
  nameError: "Name cannot include a number.",
  emailError: "Please enter a valid email address.",
  githubError: "GitHub account cannot include space.",
};

// Show error
function showError(errorUpload = false, message = "", ...elementsID) {
  // For file upload
  if (errorUpload) {
    infoText.classList.add("text-orange-500");
    noticeIcon.forEach((icon) => icon.classList.add("stroke-orange-500"));
    if (message === "fileLarge") {
      infoText.textContent = messages.fileLarge;
    }
  }

  // For message
  if (message === "name") {
    errorInputFullName.querySelector("#errorMessage").textContent = messages.nameError;
  } else if (message === "email") {
    errorInputEmail.querySelector("#errorMessage").textContent = messages.emailError;
  } else if (message === "github") {
    errorInputGithub.querySelector("#errorMessage").textContent = messages.githubError;
  }

  // For input fields
  elementsID.forEach((id) => {
    if (id === "inputFullName") {
      errorInputFullName.classList.remove("hidden");
      errorInputFullName.classList.add("flex");
      fullNameInput.classList.add("border-orange-500");
    } else if (id === "inputEmail") {
      errorInputEmail.classList.remove("hidden");
      errorInputEmail.classList.add("flex");
      emailInput.classList.add("border-orange-500");
    } else if (id === "inputGithub") {
      errorInputGithub.classList.remove("hidden");
      errorInputGithub.classList.add("flex");
      githubInput.classList.add("border-orange-500");
    }
  });
}

// Reset error messages
function resetError() {
  noticeIcon.forEach((icon) => icon.classList.remove("stroke-orange-500"));

  infoText.textContent = messages.defaultMessageUpload;
  infoText.classList.remove("text-orange-500");

  errorInputFullName.classList.add("hidden");
  errorInputEmail.classList.add("hidden");
  errorInputGithub.classList.add("hidden");

  // Remove error input border
  fullNameInput.classList.remove("border-orange-500");
  emailInput.classList.remove("border-orange-500");
  githubInput.classList.remove("border-orange-500");
}

export { checkFileSize, checkInputValue, showError, resetError };
