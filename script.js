/* GOAL: Make a functional to-do list where user can add new items and remove items once completed */


 function addToDo(todo) {
     const text =
         `<li class="item">
            <i class="co fa fa-circle-thin" job="complete"></i>
            <p class="text">${todo}</p>
            <i class="de fa fa-trash-o" job="delete"></i>
          </li>`;

        const list = document.getElementById('list');
        list.insertAdjacentHTML('beforeend', text);
    }

addToDo('drink coffee');


