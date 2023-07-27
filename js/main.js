const formInput = document.getElementById('form-input');
const submitBtn = document.getElementById('btn-submit');
const deleteBtn = document.getElementById('btn-delete');
const itemList = document.getElementById('item-list');
const list = document.querySelector('.item-group-list');

function addTask(e) {
    e.preventDefault()

    const itemInput = document.getElementById('item-input').value;
    const li = document.createElement('li');
    li.className = 'item-group-list';
    list.appendChild(document.createTextNode(itemInput))
    itemList.appendChild(list)
}

function deleteTask(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure')) {
            list.remove()
        } else {
            alert('Item was not deleted')
        }
    }
}

formInput.addEventListener('submit', addTask);
deleteBtn.addEventListener('click', deleteTask);

