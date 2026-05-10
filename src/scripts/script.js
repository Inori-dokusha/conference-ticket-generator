import { generateTicket } from "./components/form.js";

generateTicket();

// Get element generator button
const generateButton = document.querySelector("#generate").addEventListener("click", generateTicket);

// Get error elements and input fields
const errorInputFullName = document.querySelector("#errorFullName");
const errorInputEmail = document.querySelector("#errorEmailAddress");
const errorInputGithub = document.querySelector("#errorGithubAccount");

// Get element to show error message
const infoText = document.querySelector("#info");
const noticeIcon = document.querySelectorAll("#errorUpload svg path");

// Get element to upload and remove avatar
const uploadImage = document.querySelector("#uploadImage");
const uploadInstructions = document.querySelector("#uploadInstructions");

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
