const inputField = document.getElementById('itemInput');
const addButton = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');

addButton.addEventListener('click', function () {
  const newItemText = inputField.value.trim();

  if (newItemText !== '') {

    const listItem = document.createElement('li');
    listItem.textContent = newItemText;

    itemList.appendChild(listItem);

    inputField.value = '';
  } else {
    alert('Masukkan item sebelum menambahkannya ke daftar.');
  }
});
