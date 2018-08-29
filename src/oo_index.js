
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
});

const taskDescription = document.querySelector('input');
const taskForm = document.querySelector('form');
const submitTask = document.querySelectorAll('input')[1];
const taskList = document.getElementById('tasks');
const priorityOptions = ['high', 'medium', 'low'];

let priorityList = document.createElement('select');
for (const i of priorityOptions) {
  let newOption = document.createElement('option');
  newOption.innerText = i;
  newOption.value = i;
  priorityList.appendChild(newOption);
};

taskForm.appendChild(priorityList);

const prioritySelect = document.querySelector('select');

const addTask = e => {
  e.preventDefault();

  let newToDo = document.createElement('li');
  newToDo.innerText = taskDescription.value;

  let checkMark = document.createElement('img');
  checkMark.src = 'https://cdn3.iconfinder.com/data/icons/ui-glynh-blue-02-of-5/100/UI_Blue_2_of_3_20-512.png';
  checkMark.width = '15';
  checkMark.height = '15';
  checkMark.hspace = '10';

  switch (true) {
    case (prioritySelect.value === priorityOptions[0]):
      newToDo.style.color = 'red';
      break;
    case (prioritySelect.value === priorityOptions[1]):
      newToDo.style.color = 'orange';
      break;
    default:
      newToDo.style.color = 'green';
  }

  taskList.appendChild(newToDo);
  newToDo.appendChild(checkMark);
  checkMark.addEventListener('click', removeTask);

  taskForm.reset();
};

const removeTask = e => {
  taskList.removeChild(e.path[1]);
};

taskForm.addEventListener('submit', addTask);
