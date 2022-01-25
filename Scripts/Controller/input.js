import { fullName } from "../Model/logic.js";

window.addEventListener('load', bindEvents);

function bindEvents() {

    document.getElementById('greet').addEventListener('click', display);
    document.getElementById('reset').addEventListener('click', reset);
}

function reset() {

    document.getElementById('first').value = '';
    document.getElementById('last').value = '';
    document.getElementById('msg').innerText = '';
}

function display() {

    let firstName = document.getElementById('first').value;
    let lastName = document.getElementById('last').value;

    document.getElementById('msg').innerText = `Welcome ${fullName(firstName, lastName)}`;
}