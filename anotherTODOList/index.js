const input = document.querySelector("input")
const showTodo = document.getElementById("showTodo")
const todo = document.querySelector(".todo")
showTodo.appendChild(todo)

const addTodo = () => {
    let li = document.createElement("li")
    let todoname = document.createElement("div")
    todoname.setAttribute("class", "todoname")
    let liText = document.createTextNode(input.value)
    todoname.appendChild(liText)
    li.appendChild(todoname) 
    if (input.value != "") {
        todo.appendChild(li)
    }

    let buttons = document.createElement("div")
    buttons.setAttribute("class", "buttons")
    let editBtn = document.createElement("button")
    let editBtnText = document.createTextNode("Edit")
    editBtn.appendChild(editBtnText)
    editBtn.setAttribute("class", "editBtn")
    editBtn.setAttribute("onclick", "editBtn(this)")
    buttons.appendChild(editBtn)
    li.appendChild(buttons)

    let delBtn = document.createElement("button")
    let delBtnText = document.createTextNode("Delete")
    delBtn.appendChild(delBtnText)
    delBtn.setAttribute("class", "delBtn")
    delBtn.setAttribute("onclick", "delBtn(this)")
    buttons.appendChild(delBtn)
    li.appendChild(buttons)

    input.value = ""
}


const editBtn = (x) => {
    updatedValue = prompt("Enter You Want To Do...", x.parentNode.parentNode.firstChild.innerText)
    x.parentNode.parentNode.firstChild.innerText = updatedValue
}
const delBtn = (x) => {
    x.parentNode.parentNode.remove()
}
const delAll = () => {
    todo.innerHTML = ""
}