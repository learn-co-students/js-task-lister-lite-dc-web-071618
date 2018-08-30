// Deliverables:

const submitForm = document.getElementById("create-task-form")

submitForm.addEventListener('submit', function(e) {
  e.preventDefault()
  let currentTasks = document.getElementById("tasks")
  let task = document.getElementById("new-task-description").value
  let newListItem = document.createElement('li')
  // newListItem.innerText = task
  newListItem.innerHTML = `${task}<button data-description= ${task}>X</button>`
  currentTasks.appendChild(newListItem)

  //delete task function
    newListItem.addEventListener('click', function(e){
      newListItem.remove()
    })

  submitForm.reset()
})


//------------------------------------------------
//  _                        _    _
// (_)                      | |  (_)
//  _ _____      _____  _ __| | ___ _ __   __ _
// | / __\ \ /\ / / _ \| '__| |/ / | '_ \ / _` |
// | \__ \\ V  V / (_) | |  |   <| | | | | (_| |
// |_|___/ \_/\_/ \___/|_|  |_|\_\_|_| |_|\__, |
//                                         __/ |
//                                        |___/
//------------------------------------------------
