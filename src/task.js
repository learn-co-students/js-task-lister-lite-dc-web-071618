const tasks = [];

class Task {
    constructor(text) {
        this.text = text;
        tasks.push(this);
    }
}

function deleteTask(event){
    let task = event.target.parentElement;
    console.log(task)
    task.remove()
    // console.log(event.target.parentElement.parentElement);
}

let form = document.querySelector('#create-task-form')
console.log(form)
console.log(form.children[1].value)

form.onsubmit = function(e){
    // console.log(this.children[1].value)
    e.preventDefault();
    let textNode = document.createTextNode(this.children[1].value);
    let node = document.createElement('li');
    node.appendChild(textNode);
    list.appendChild(node);
    console.log(node)
    let button = document.createElement('button');
    button.innerText = 'Delete';
    button.addEventListener('click', deleteTask)
    node.appendChild(button)
    // task = new Task(this.children[1].value)
    // list.innerHTML = ''
    // tasks.forEach(function (task) {
    //     list.innerHTML += `<li>${task.text}<button class="delete">Delete</button></li>`
    // })
    // document.querySelectorAll('.delete').forEach((button) => {button.addEventListener('click', deleteTask)})
    // console.log(list.children)
}
