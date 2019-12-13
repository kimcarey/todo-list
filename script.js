/* Make a functional to-do list where user can add new items and remove items once completed */

// add functionality to buttons

// ADD TO LIST:
let addButton = document.getElementById('add-button');
addButton.addEventListener('click', addToDoItem);

function addToDoItem() {
    let itemText = toDoEntryBox.value; // connects the add button to the user input
    newToDoItem(itemText, false); // call the newToDoItem function passing in the user input (itemText variable) and pass false as the second parameter, since a new item will never be completed already
    toDoEntryBox.value = ''; // clear input
}

// CLEAR LIST:
let clearButton = document.getElementById('clear-completed-button');
clearButton.addEventListener('click', clearCompletedToDoItems);

function clearCompletedToDoItems() {
    let completedItems = toDoList.getElementsByClassName('completed'); // select the children of the OL list that have the "completed" class name
    // while there are completed items on the list, remove the item in the first position. Loop will continue to run until all items are removed.
    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

// EMPTY ENTIRE LIST:
let emptyButton = document.getElementById('empty-button');
emptyButton.addEventListener('click', emptyList);

function emptyList() {
    let toDoItems = toDoList.children; // select all children from the OL and loop to remove each item, clearing the whole list
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}


// SAVE LIST:
let saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', saveList);

function saveList() {
    let toDos = []; // create empty array to store objects
    // use for loop to put every item in the list into the array
    for (let i = 0; i < toDoList.children.length; i++) {
        let toDo = toDoList.children.item(i);
        // Convert all to-do items into objects (use object to store the item AND whether or not it's completed)
        let toDoInfo = {
            'task': toDo.innerText,
            'completed': toDo.classList.contains('completed')
        };

        toDos.push(toDoInfo);
    }
    // local storage can't store HTML. Stringify the array in order to convert from HTML to pure JS
    localStorage.setItem('toDos', JSON.stringify(toDos));
}


// ADD ITEMS:
// select text box and list:
let toDoEntryBox = document.getElementById('todo-entry-box'); // input box
let toDoList = document.getElementById('todo-list'); // ordered list

// function to add item to the list. Create a new list element and append text to the list element.
function newToDoItem(itemText, completed) {
    let toDoItem = document.createElement('li');
    let toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    // checks if the value "completed" is true (as passed by the function) then add the class to the li element
    if(completed) {
        toDoItem.classList.add('completed');
    }

    // puts the to-do item into the ordered list and add event listener to listen for the user double-clicking to change the state
    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener('dblclick', toggleToDoItemState)
}


// If item is new change state to removed "completed" class. Remember all new to-do items are added WITH the "completed" class as true
function toggleToDoItemState() {
    if(this.classList.contains('completed')) {
        this.classList.remove('completed')
    } else {
        this.classList.add('completed')
    }
}

function loadList() {
    if (localStorage.getItem('toDos') != null) {
        let toDos = JSON.parse(localStorage.getItem('toDos'));

        for (let i = 0; i < toDos.length; i++) {
            let toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed)
        }
    }
}

loadList();
