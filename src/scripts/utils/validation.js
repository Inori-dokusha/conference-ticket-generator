import Messages from "./messages.js";
import { updateImage } from "./uploadAvatar.js";

const message = new Messages();

// Check file size
function checkFileSize(file) {
  if (file.size / 1024 > 500) {
    message.showError("fileLarge");
  } else {
    message.resetError("uploadAvatar");
    updateImage(file);
  }
}

function checkInputValue(...values) {
  for (const value of values) {
    if (value === "") {
      return false;
    }
  }
}

export { checkFileSize, checkInputValue };
