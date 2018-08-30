
//form input fields
let taskForm = document.querySelector('#create-task-form')
let taskText = document.querySelector('#new-task-description')

//location of new tasks created
let taskElement = document.querySelector('ul')

taskForm.addEventListener('submit', function(e) {
  //prevent submit from reloading
  e.preventDefault()

  let tasks = document.querySelector('#tasks')
  let liElement = document.createElement('li')

  //add task
  tasks.appendChild(liElement)
  liElement.innerHTML = `${taskText.value} <button>X</button>`

  //reset input field
  e.target.reset()

  //delete task
  liElement.addEventListener('click', function(e){
      liElement.remove()
    })

})
