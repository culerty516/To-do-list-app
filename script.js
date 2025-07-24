document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addButton = document.getElementById('add-button');
    const taskList = document.getElementById('task-list');

    function createTaskElement(text) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(deleteButton);

        li.addEventListener('click', () => {
            li.classList.toggle('done');
        });

        return li;
    }

    addButton.addEventListener('click', () => {
        const text = taskInput.value.trim();
        if (text) {
            const taskItem = createTaskElement(text);
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
        taskInput.focus();
    });

    taskInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});
