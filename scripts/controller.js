window.addEventListener("load", bindEvents);

function bindEvents() {

    let greetBtn = document.getElementById('greet-btn');
    greetBtn.addEventListener("click", takeInput);

    let resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', reset);
}

function reset() {

    document.getElementById('first-name').value = ``;
    document.getElementById('last-name').value = ``;
    document.getElementById('greet-msg').innerText = ``;
}

function takeInput() {

    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;

    output(firstName, lastName);
}

const output = (firstName, lastName) => document.getElementById('greet-msg').innerText = `Welcome ${fullName(firstName, lastName)}`