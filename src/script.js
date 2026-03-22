const btnGenerate = document.querySelector("button[type='submit']");
const btnForImage = document.querySelectorAll(".btn-for-image button");
const form = document.querySelector(".form");
const upload = document.querySelector(".upload");
const inputFile = document.querySelector("#avatar");
const inputName = document.querySelector("#fullName");
const inputEmail = document.querySelector("#email");
const inputGitHub = document.querySelector("#github");
const noticeText = document.querySelector(".notice-text");
const uploadImage = document.querySelector(".upload-image");
const textInfo = document.querySelector(".info");
const result = document.querySelector("result");
const ticketDate = document.querySelector(".ticket-date");
const userAvatar = document.querySelector("#userAvatar");
const userName = document.querySelector(".user-name");
const userAccountGithub = document.querySelector(".github-account");

// Event to generate ticket
btnGenerate.addEventListener("click", generateTicket);

// Event to upload
function addEvent() {
  upload.addEventListener("click", click);
  inputFile.addEventListener("change", handleFiles);
  upload.addEventListener("dragover", drageover);
  upload.addEventListener("dragleave", dragleave);
  upload.addEventListener("drop", drop);
}

const timeoutId = setTimeout(function () {
  addEvent();
}, 1000);

function click() {
  inputFile.click();
}

function handleFiles() {
  const files = this.files[0];
  sizeValidation(files);
}

function drageover(e) {
  e.preventDefault();
  upload.classList.add("focus");
}

function dragleave() {
  upload.classList.remove("focus");
}

function drop(e) {
  e.preventDefault();
  upload.classList.remove("focus");
  const files = e.dataTransfer.files[0];
  sizeValidation(files);
}

// file size validation
function sizeValidation(files) {
  const fileSize = files.size;
  const k = 1024;
  const i = Math.floor(Math.log(fileSize) / Math.log(k));
  const kb = fileSize / Math.pow(k, i);
  const maxSize = 500;

  if (kb > maxSize) {
    noticeText.classList.add("error-text");
  } else {
    validation(files);
  }
}

function validation(files) {
  const url = URL.createObjectURL(files);

  uploadImage.src = url;
  uploadImage.style.padding = 0;
  textInfo.classList.add("hidden");

  btnForImage[0].parentElement.classList.remove("hidden");

  removeEvent();
}

btnForImage[0].addEventListener("click", removeImage);
btnForImage[1].addEventListener("click", changeImage);

function removeImage() {
  uploadImage.src = "./assets/images/icon-upload.svg";
  btnForImage[0].parentElement.classList.add("hidden");
  textInfo.classList.remove("hidden");
  addEvent();
}

function changeImage() {}

// Remove all event on input
function removeEvent() {
  upload.removeEventListener("click", click);
  inputFile.removeEventListener("change", handleFiles);
  upload.removeEventListener("dragover", drageover);
  upload.removeEventListener("dragleave", dragleave);
  upload.removeEventListener("drop", drop);
}

// Generate ticket
function generateTicket() {
  const value = inputName,
    inputFile,
    inputEmail,
    inputGitHub;

  if (value) {
    form.classList.add("hidden");
    resutl.classList.remove("hidden");
  }
}
