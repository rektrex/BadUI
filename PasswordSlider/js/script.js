'use strict';

var password = document.getElementById('password');
var valueSlider = document.getElementById('valueSlider');
var submitButton = document.getElementById('submitButton');
var backspaceButton = document.getElementById('backspaceButton');

var currentCharacter = '1';

const convertBase = (value) => {
  if (value == 35) return 'z';
  return value.toString(35);
}

valueSlider.onchange = () => {
  currentCharacter = convertBase(parseInt(valueSlider.value));
}

submitButton.onclick = () => {
  password.readOnly = false;
  password.value += currentCharacter;
  password.readOnly = true;
}

backspaceButton.onclick = () => {
  if (password.value) {
    password.readOnly = false;
    password.value = password.value.slice(0, password.value.length - 1);
    password.readOnly = true;
  } 
}
