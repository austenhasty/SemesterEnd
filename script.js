let tasks = [];

document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
    let name = document.getElementById("taskInput").value;
    let priority = document.getElementById("priority").value;

    if (name.trim() === "") {
        alert("Please enter a task");
        return;
    }

    let task = {
        id: Date.now(),
        name: name,
        priority: priority,
        date: new Date().toLocaleDateString()
    };

    tasks.push(task);

    displayTasks();

    console.log(JSON.stringify(tasks));

    document.getElementById("taskInput").value = "";
}

function displayTasks() {
    let output = "";

    for (let task of tasks) {

        let styleClass = "";

        if (task.priority === "High") {
            styleClass = "high";
        } else if (task.priority === "Medium") {
            styleClass = "medium";
        } else {
            styleClass = "low";
        }

        output += `
            <div class="task ${styleClass}">
                <strong>${task.name}</strong><br>
                Priority: ${task.priority}<br>
                Date: ${task.date}<br>

                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
    }

    document.getElementById("taskmanager").innerHTML = output;
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);

    displayTasks();

    console.log(JSON.stringify(tasks));
}