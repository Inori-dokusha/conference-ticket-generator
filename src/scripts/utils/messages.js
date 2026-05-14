// Get error elements and input fields
const errorInputFullName = document.querySelector("#errorFullName");
const errorInputEmail = document.querySelector("#errorEmailAddress");
const errorInputGithub = document.querySelector("#errorGithubAccount");

class Messages {
  upload = "Upload your photo (JPG or PNG, max size: 500KB).";
  fileLarge = "File too large. Please upload under 500KB.";
  nameError = "Name cannot include a number.";
  emailError = "Please enter a valid email address.";
  githubError = "GitHub account cannot include space.";

  showError(...elements) {
    elements.forEach((element) => {
      if (element === "fileLarge") {
        return `${this.fileLarge}`;
      } else if (element === "inputName") {
        return `${this.nameError}`;
      } else if (element === "inputEmail") {
        return `${this.emailError}`;
      } else if (element === "inputGithub") {
        return `${this.githubError}`;
      }
    });
  }

  resetError(noticeIcon, ...elements) {
    elements.forEach((element) => {
      if (element === "uploadAvatar") {
        noticeIcon.forEach((icon) => icon.classList.remove("stroke-orange-500"));
        infoText.classList.remove("text-orange-500");
        return `${this.upload}`;
      } else if (element === "inputName") {
        fullNameInput.classList.remove("border-orange-500");
        errorInputFullName.classList.add("hidden");
        return "";
      } else if (element === "inputEmail") {
        emailInput.classList.remove("border-orange-500");
        errorInputEmail.classList.add("hidden");
        return "";
      } else if (element === "inputGithub") {
        githubInput.classList.remove("border-orange-500");
        errorInputGithub.classList.add("hidden");
        return "";
      }
    });
  }
}

export default Messages;
