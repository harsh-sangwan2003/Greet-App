const titleCase = (name) => name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
const fullName = (firstName, lastName) => titleCase(firstName) + " " + titleCase(lastName);