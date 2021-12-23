
const inputEL = document.querySelector(".todo-input");
const inputBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


document.addEventListener("DOMContentLoaded", getTodos);
inputBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);


//functions

function addTodo(event) {
    //
    event.preventDefault();
    //
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //
    const newTodo = document.createElement('li');
    newTodo.innerText = inputEL.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // add todo local storage
    saveLocalTodos(inputEL.value);
    //
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //
    todoList.appendChild(todoDiv);
    //
    inputEL.value="";
}


function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function(){
        todo.remove();        
        })
    }

    //check mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
                case "completed":
                    if (todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    }else {
                        todo.style.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (!todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    }else {
                        todo.style.display = "none";
                    }
                    break;
        }
    });
}


function saveLocalTodos(todo) {
    //check local storage
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = []
    }else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos () {
    //check local storage
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = []
    }else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //
    todoList.appendChild(todoDiv);
    })
}

function removeLocalTodos(todo){
     //check local storage
     let todos;
     if(localStorage.getItem("todos") === null){
         todos = []
     }else {
         todos = JSON.parse(localStorage.getItem("todos"));
     }
     const todoIndex = todo.children[0].innerText;
     todos.splice(todos.indexOf(todoIndex), 1);
     localStorage.setItem("todos", JSON.stringify(todos));
}