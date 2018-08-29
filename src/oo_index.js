
document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList();
  let formElement = document.getElementById('create-task-form')
  formElement.addEventListener('submit', taskHandler)

});

function taskHandler(event) {
  event.preventDefault()
  let userInput = document.getElementById('new-task-description').value
  addTask(userInput)
  document.querySelector('form').reset()
}

function addTask(userInput) {
  let taskList = document.getElementById('tasks')
  let newTask = document.createElement('li')

  taskList.appendChild(newTask)
  let number = taskList.getElementsByTagName('li').length
  newTask.innerHTML = `${userInput} <button>X</button>`
  newTask.id = number

  let deleteButton = newTask.querySelector('button')
  deleteButton.addEventListener('click', deleteTask)
}

function deleteTask(event) {
  let button = event.currentTarget
  let buttonParent = button.parentNode
  buttonParent.parentNode.removeChild(buttonParent)
}
