// Remove avatar
function removeImage() {
  inputFile.value = "";
  URL.revokeObjectURL(url);

  // Reset url of image to default and add padding
  uploadImage.src = defaultUrl;
  uploadImage.style.padding = "0.5rem";

  // Hide the remove button and show the upload instructions
  uploadAvatar.querySelector("#actionImage").classList.add("hidden");
  uploadInstructions.classList.remove("hidden");
}

// Change avatar
function changeImage() {
  inputFile.click();
}

// Import functions
export { removeImage, changeImage };
