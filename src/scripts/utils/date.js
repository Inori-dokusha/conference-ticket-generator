// Format the date options
const option = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

// Get the current date and format it using the specified options
const date = new Date().toLocaleDateString("en-US", option);

export default date;
