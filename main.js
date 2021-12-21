
const inputEL = document.querySelector(".input-el")
const inputBtn = document.querySelector(".input-btn")
const todoList = document.querySelector(".input-list")
let myTodo = []


inputBtn.addEventListener("click", addTodo)


//functions

function addTodo(event) {
    //
    event.preventDefault()
    //
    // myTodo.push(inputEL.value)
    // inputEL.value= ""
    // console.log(myTodo)
    //
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    //
    const newTodo = document.createElement("li")
    newTodo.innerText = "hey"
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)
    //
    const completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete.btn")
    todoDiv.appendChild(completedButton)
    //
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("complete.btn")
    todoDiv.appendChild(trashButton)
    //
    todoList.appendChild(todoDiv)
    // localStorage.setItem("myTodo", JSON.stringify(myTodo) )
}


