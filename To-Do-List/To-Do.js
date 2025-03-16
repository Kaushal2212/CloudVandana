function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") return;
    
    let li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `${taskText} <button class="remove-btn" onclick="removeTask(this)">Remove</button>`;
    
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}