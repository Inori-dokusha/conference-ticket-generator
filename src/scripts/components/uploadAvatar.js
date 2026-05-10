import { checkFileSize } from "../utils/validation.js";
import { removeImage, changeImage } from "./buttons.js";

const uploadAvatar = document.querySelector("#uploadAvatar");
const inputFile = document.querySelector("#avatar");

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
  uploadAvatar.classList.add("outline-2", "outline-offset-4");
}

function dragleave() {
  uploadAvatar.classList.remove("outline-2", "outline-offset-4");
}

function drop(e) {
  e.preventDefault();

  uploadAvatar.classList.remove("outline-2", "outline-offset-4");

  const file = e.dataTransfer.files[0];

  if (!file) return;

  checkFileSize(file);
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
  uploadImage.classList.remove("p-2");

  // Hide the upload instructions and show the remove button
  uploadInstructions.classList.add("hidden");
  uploadAvatar.querySelector("#actionImage").classList.remove("hidden");
}
