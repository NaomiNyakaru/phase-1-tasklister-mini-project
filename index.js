document.addEventListener('DOMContentLoaded', () => {

    const newTask = document.getElementById('new-task-description')

    const taskList = document.getElementById('tasks');

    document.querySelector('#create-task-form')
    .addEventListener('submit', (e) => createNewList(e))

    const createNewList = (event) => {
        event.preventDefault();

        const newList= document.createElement('li');

        console.log(newTask.value);

        newList.textContent = newTask.value;

        createDeleteButton(newList);

        taskList.appendChild(newList)
    }

    const createDeleteButton = (task) => {
     
        const btn = document.createElement('button');
      
        btn.innerHTML = 'X';
     
        task.appendChild(btn);
        btn.addEventListener('click', (e) => {
           const taskToDelete =  e.target.parentElement;
           console.log(taskToDelete);
           taskToDelete.remove();
        })
    };
});