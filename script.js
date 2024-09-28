document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input').value;
    const taskTime = document.getElementById('task-time').value;
    if (taskInput === '' || taskTime === '') {
        alert('Please fill in both fields.');
        return;
    }

    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');
    taskDetails.innerHTML = `<strong>${taskInput}</strong><br><small>Time: ${taskTime}</small>`;

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.innerHTML = '✔';
    completeBtn.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '✖';
    deleteBtn.addEventListener('click', () => {
        taskItem.remove();
    });

    taskItem.appendChild(taskDetails);
    taskItem.appendChild(completeBtn);
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);

    // Clear inputs after adding task
    document.getElementById('task-input').value = '';
    document.getElementById('task-time').value = '';
}
