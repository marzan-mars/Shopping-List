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

  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createbtn('remove-item btn-link text-red');
  li.appendChild(button);

  ItemList.appendChild(li)

  ItemInput.value = ''
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

btncler.addEventListener('click', ItemAllClear)