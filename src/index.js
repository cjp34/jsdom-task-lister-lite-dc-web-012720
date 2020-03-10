document.addEventListener("DOMContentLoaded", pageSetup)

function pageSetup() {
    document.getElementById('create-task-form').addEventListener("submit", processFormSubmit)
  
}

function processFormSubmit(event) {
    event.preventDefault()
    let newTaskDescription = document.getElementById("new-task-description").value
    let newTask = createNewTask(newTaskDescription)
    appendNewTask(newTask)
    event.target.reset()
}

function createNewTask(description) {
    let task = document.createElement('li')
    task.innerText = description
    return task

}

function appendNewTask(e)  {
    let table = document.getElementById('tasks')
    table.appendChild(e)
}