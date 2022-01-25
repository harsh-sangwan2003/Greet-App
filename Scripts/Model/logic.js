export const fullName = (firstName, lastName) => titleCase(firstName) + " " + titleCase(lastName)

function titleCase(name) {

    let char = name.charAt(0).toUpperCase();
    let res = name.substring(1).toLowerCase();

    return char + res;
}