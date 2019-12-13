/* GOAL: Make a functional to-do list where user can add new items and remove items once completed */


// Add functionality to add items
function addItems(item) {
    let output = []; // Need empty list to create full list of items
    output.push(item);
    console.log(output); // Should be console.log or return??
}


// Give user feedback once to-do item has been added
function logSubmit(event) {
    log.textContent = 'Success! New item added.';
    event.preventDefault();

}
const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);


// Show to-do item in list. Currently when you press 'add' the text disappears



// Add functionality to remove items
// Does this function need to have a parameter? I'm thinking maybe not??
function deleteItem(item) {
    addEventListener('click', function() {
        delete(item);
    });
}

// For example, should it be like this instead?
// function deleteItem() {
//     addEventListener('click', function() {
//         delete();
//     });
// }



// Stylize - create html and css files