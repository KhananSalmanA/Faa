const inputField = document.getElementById('textInput');
const keyDisplay = document.getElementById('keyDisplay');

inputField.addEventListener('keydown', function (event) {
  keyDisplay.textContent = `Karakter terakhir yang ditekan: ${event.key}`;
});
