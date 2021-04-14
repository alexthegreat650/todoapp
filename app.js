
// Icon
const sun = "/Users/l/Desktop/Frontendmentor.io/Todo App/todo-app-main/images/icon-sun.svg";
const moon = "/Users/l/Desktop/Frontendmentor.io/Todo App/todo-app-main/images/icon-moon.svg";

// Icon divs
const sunIcon = document.getElementById('sunimage');
const btn = document.getElementById('icon-image');

// Background image divs
const image = document.getElementById('background-images');
const play = document.getElementById('play')

// ToDo item divs
const todoThree = document.getElementById('todo-3');

// App todo styling and divs
const cols = document.getElementsByClassName('todos');
const font = document.getElementsByClassName('font');
const container = document.getElementsByClassName('container');
const images = document.getElementById('background-images');
const iconImages = document.getElementById('iconImages')

// images
const darkImage = "/Users/l/Desktop/Frontendmentor.io/Todo App/todo-app-main/images/bg-mobile-dark.jpg";
const lightImage = "/Users/l/Desktop/Frontendmentor.io/Todo App/todo-app-main/images/bg-mobile-light.jpg";

btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    document.body.classList.remove('darkimage');
    document.querySelector('html').classList.toggle('light');
})

// Add new todo
function newTodo(event) {
    // Create DOM elements
    var li = document.createElement('li');
    var checkbox = document.createElement('span'); //Creating span for checkbox
    var inputValue = document.getElementById('todo-input').value;
    var p = document.createElement('p');
    var t = document.createTextNode(inputValue);

    // paragraph that gets a text node
    p.appendChild(t);
    // list item that appends a paragraph
    li.appendChild(p);
    li.className = 'todo-item';
    li.className += 'show';
    li.id = 'show';

    if(event.which == 13 || event.keyCode == 13 || event.onclick) {
        if(inputValue === "") {
            alert('You must write something!');
        } else {
            document.getElementById('todo-list-id').appendChild(li);
        }
        // makes value in input bar disappear after you press enter

        var checkbox = document.createElement('span');
            checkbox.className = 'so';
            checkbox.id = 'so';
            p.id = 'strike-through';
        // Creating span for checkmark with linear-gradient background

        var checkmark = document.createElement('img');
            checkmark.className = 'checkmark';
            checkmark.id = 'checkmark';
            checkmark.src = '/Users/l/Desktop/Frontendmentor.io/Todo App/todo-app-main/images/icon-check.svg';
        // Creating img element for checkmark to appear

        checkbox.addEventListener('click', () => {
            document.getElementById('so').classList.toggle('completion');
            document.getElementById('strike-through').classList.toggle('amazing');
        })

        document.getElementById('todo-input').value = "";
        var span = document.createElement('span');
            span.className = 'close';
            span.onclick = function() {
                var div = this.parentElement;
                div.style.display = 'none';
                div.remove();
                countTodosRemove();
            }
        li.appendChild(span);
        countTodos();
        }
}

// Check number of Todo items
function countTodos() {
    var li = document.getElementsByClassName('close');
    document.getElementById('todo-number').innerHTML = li.length;
}

// Check number of Todo items when closed
function countTodosRemove() {
    var li = document.getElementsByClassName('close');
    document.getElementById('todo-number').innerHTML = li.length;
}

// function for strikethrough and background
function lineThrough() {
    const todo = this.parentElement;
    todo.classList.toggle('active');
    todo.classList.toggle('completed');
}




//functionalities need to code for
// 1. Make "Clear completed work"
// 2. When I click checkmark the todo count goes down
