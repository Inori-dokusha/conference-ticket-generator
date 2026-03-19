const btnGenerate = document.querySelector("button[type='submit']");
const form = document.querySelector(".form");
const upload = document.querySelector(".upload");
const inputFile = document.querySelector("#avatar");
const inputName = document.querySelector("#fullName");
const inputEmail = document.querySelector("#email");
const inputGitHub = document.querySelector("#github");
const noticeText = document.querySelector(".notice-text");
const uploadImage = document.querySelector(".upload-image");
const btnForImage = document.querySelectorAll(".btn-for-image button");

upload.addEventListener("click", click);
upload.addEventListener("dragover", drageover);
upload.addEventListener("dragleave", dragleave);
upload.addEventListener("drop", drop);

function click() {
  inputFile.click();
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

// get parent of btn
const parentEl = btnForImage.forEach((btn) => {
  const parent = btn.parentElement;
  return parent;
});

// file size validation
function sizeValidation(files) {
  const fileSize = files.size;
  const k = 1024;
  const i = Math.floor(Math.log(fileSize) / Math.log(k));
  const kb = (fileSize / Math.pow(k, i)).toFixed(2) + "KB";
  const maxSize = "500KB";

  if (kb >= maxSize) {
    noticeText.classList.add("error-text");
  }

  let url = URL.createObjectURL(files);
  uploadImage.src = url;
  uploadImage.style.padding = 0;
  console.log(url);
}
