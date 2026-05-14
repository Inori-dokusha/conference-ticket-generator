class Form {
  constructor(avatar, name, email, github) {
    this.avatar = avatar;
    this.name = name;
    this.email = email;
    this.github = github;
  }

  getDate() {
    const option = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    const date = new Date().toLocaleDateString("en-US", option);
    return date;
  }

  getTicketNumber() {
    return `${Math.floor(Math.random() * 90000 + 10000)} #`;
  }

  splitName() {
    return this.name.split(" ");
  }
}

export default Form;
