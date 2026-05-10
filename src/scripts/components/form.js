import date from "../utils/date.js";
import randomNum from "../utils/randomTicketNumber.js";
import { checkInputValue } from "../utils/validation.js";

const ticketForm = document.querySelector("#ticketForm");

const fullNameInput = document.querySelector("#fullName");
const emailInput = document.querySelector("#email");
const githubInput = document.querySelector("#github");

class Form {
  constructor(avatar, name, email, github) {
    this.avatar = avatar;
    this.name = name;
    this.email = email;
    this.github = github;
  }

  getDate() {
    return date;
  }

  getTicketNumber() {
    return `${randomNum} #`;
  }

  splitName() {
    return this.name.split(" ");
  }
}

function generateTicket() {
  const result = checkInputValue();

  if (!result) return;

  // Hide the ticket form and show the generator result
  ticketForm.classList.add("hidden");
}

export { generateTicket };
