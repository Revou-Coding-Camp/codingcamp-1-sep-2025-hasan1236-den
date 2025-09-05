let todoList = [];

/// Function to validate input fields
function validateInput() {
    const todoInput = document.getElementById("todo-input").value.trim();
    const todoDateInput = document.getElementById("todo-date-input").value;

    if (todoInput === "" || todoDateInput === "") {
    alert("Please fill in both the task and due date.");
    } else {
    addTodo(todoInput, todoDateInput);
    }
}

function addTodo(todo, dueDate) {
  // Add a new todo item to the list
    const todoItem = {
    task: todo,
    dueDate: dueDate,
    completed: false,
    };
    todoList.push(todoItem);
    renderTodoList();
    document.getElementById("todo-input").value = "";
    document.getElementById("todo-date-input").value = "";
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    renderTodoList();
}

function deleteAllTodo() {
    todoList = [];
    renderTodoList();
}

function filterTodo() {
    const today = new Date().toISOString().split("T")[0];
    const filtered = todoList.filter((item) => item.dueDate === today);
    renderTodoList(filtered);
}

function renderTodoList(list = todoList) {
    const todoListContainer = document.getElementById("todo-list");
    todoListContainer.innerHTML = "";

    list.forEach((item, index) => {
    const li = document.createElement("li");
    li.className =
    "flex justify-between items-center bg-gray-800 px-4 py-2 rounded-xl";

    li.innerHTML = `
            <label class="flex items-center gap-2">
            <input type="checkbox" onchange="toggleComplete(${index})" ${
    item.completed ? "checked" : ""
    }>
            <span class="${
            item.completed ? "line-through text-gray-500" : ""
            }">${item.task}</span>
            <span class="text-sm text-gray-400">(${item.dueDate})</span>
            </label>
            <button onclick="deleteTodo(${index})" 
            class="text-red-400 hover:text-red-600">Delete</button>
        `;
    todoListContainer.appendChild(li);
    });
}
