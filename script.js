const ItemForm = document.getElementById('item-form');
const ItemInput = document.getElementById('item-input');
const ItemList = document.getElementById('item-list');

function AddItem (e) {
  const newItem = ItemInput.value;
  e.preventDefault();
  if(ItemInput.value === '') {
    alert('Пожалуйста введите товар');
    return;
  }

  AddItemToDOM(newItem);

  addItemToStorage(newItem);
  
  ItemInput.value = ''
}

function AddItemToDOM(item)
 {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createbtn('remove-item btn-link text-red');
  li.appendChild(button);

  ItemList.appendChild(li)
 } 

function createbtn(classes) {
  const btn = document.createElement('button');
  btn.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  btn.appendChild(icon)
  return btn;
}

function createIcon (classes) {
  const icon = document.createElement('i')
  icon.className = classes;
  return icon;
}

ItemForm.addEventListener('submit', AddItem);

function removeItem(e) {
  if(e.target.parentElement.classList === 'remove-item' ); {
    if(confirm('Вы уверены ?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

ItemList.addEventListener('click', removeItem);

const btncler = document.getElementById('clear');

function ItemAllClear() {
  if(confirm('Вы уверены?')) {
    for(let i = 0 ; ItemList.firstChild; i++) {
      ItemList.removeChild(ItemList.firstChild);
    }
  }
}

btncler.addEventListener('click', ItemAllClear);

const ItemFilter = document.getElementById('filter');

function filterItems(e) {
  const items = ItemList.querySelectorAll('li');
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();

    if (itemName.indexOf(text) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

ItemFilter.addEventListener('input', filterItems);

//Adding items to localStorage

function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();

  itemsFromStorage.push(item);

  localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}

function getItemsFromStorage () {
  let itemsFromStorage;
  if(localStorage.getItem('items') === 0) {
    itemsFromStorage = []
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  }

  return itemsFromStorage;
}

function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => AddItemToDOM(item));
  checkUI();
}