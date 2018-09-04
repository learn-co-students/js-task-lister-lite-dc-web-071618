document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList();
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', submitHandler)
});

function submitHandler(event) {
  event.preventDefault()
  let taskList = document.querySelector('#tasks')
  let input = document.querySelector('#new-task-description').value
  addTask(input, taskList)
  document.querySelector('#create-task-form').reset()
}

function addTask(task, node) {
  let taskItem = document.createElement('li')
  taskItem.innerHTML = `${task} <button>x</button>`
  node.appendChild(taskItem)
  let deleteButton = taskItem.querySelector('button')
  deleteButton.addEventListener('click', deleteTask)
}

function deleteTask(event) {
  let button = event.currentTarget
  let buttonParent = button.parentNode
  buttonParent.parentNode.removeChild(buttonParent)
}
