class Issue {
    constructor(title = "", description = "", type = "", priority = "", date = new Date(), assignee = "", status = "Open") {
        this.title = title;
        this.description = description;
        this.type = type;
        this.priority = priority;
        this.date = date;
        this.assignee = assignee;
        this.status = status;
    }
}

const state = {
    issues: [
        new Issue("Issue 1", "Description for issue 1", "Bug", "High", new Date(), "Alice", "Open"),
        new Issue("Issue 2", "Description for issue 2", "Feature", "Medium", new Date(), "Bob", "In Progress"),
        new Issue("Issue Title", "Issue Description", "Feature", "Low", new Date(), "Keita", "Closed")
    ]
};

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    state.issues.forEach((issue, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.innerHTML = `
            <h3>${issue.title}</h3>
            <p>${issue.description}</p>
            <p><strong>Type:</strong> ${issue.type}</p>
            <p><strong>Priority:</strong> ${issue.priority}</p>
            <p><strong>Assignee:</strong> ${issue.assignee}</p>
            <p><strong>Status:</strong> ${issue.status}</p>
            <button onclick="markAsCompleted(${index})">Mark as Completed</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskDiv);
    });
}

function showNewTaskForm() {
    document.getElementById('new-task-form').classList.remove('hidden');
}

function hideNewTaskForm() {
    document.getElementById('new-task-form').classList.add('hidden');
}

function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const type = document.getElementById('type').value;
    const priority = document.getElementById('priority').value;
    const assignee = document.getElementById('assignee').value;

    const newTask = new Issue(title, description, type, priority, new Date(), assignee, "Open");
    state.issues.push(newTask);

    renderTasks();
    hideNewTaskForm();
}

function deleteTask(index) {
    state.issues.splice(index, 1);
    renderTasks();
}

function markAsCompleted(index) {
    state.issues[index].status = "Closed";
    renderTasks();
}

function sortByType() {
    state.issues.sort((a, b) => a.type.localeCompare(b.type));
    renderTasks();
}

// Initialize task list
renderTasks();
