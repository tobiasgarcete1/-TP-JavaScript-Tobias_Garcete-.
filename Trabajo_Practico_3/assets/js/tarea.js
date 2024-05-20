let tasks = [];

function taskManager() {
    let action = prompt("Seleccione una acción: \n1. Agregar tarea \n2. Listar tareas \n3. Editar tarea \n4. Eliminar tarea \n0. Salir");
    switch(action) {
        case '1':
            let newTask = prompt("Ingrese la nueva tarea:");
            addTask(newTask);
            break;
        case '2':
            listTasks();
            break;
        case '3':
            listTasks();
            let editIndex = parseInt(prompt("Ingrese el número de la tarea a editar:")) - 1;
            let editedTask = prompt("Ingrese la nueva descripción de la tarea:");
            editTask(editIndex, editedTask);
            break;
        case '4':
            listTasks();
            let deleteIndex = parseInt(prompt("Ingrese el número de la tarea a eliminar:")) - 1;
            deleteTask(deleteIndex);
            break;
        case '0':
            console.log("Saliendo del administrador de tareas.");
            return;
        default:
            alert("Acción no válida, por favor intente de nuevo.");
    }
    taskManager(); 
}

function validateTaskName(task) {
    const regex = /^\S.*\S$|^\S$/;
    return regex.test(task);
}

function addTask(task) {
    if (!validateTaskName(task)) {
        alert("Error: El nombre de la tarea no puede estar vacío ni contener espacios al principio o al final.");
        return;
    }
    tasks.push(task.trim());
    alert(`Tarea "${task}" agregada.`);
}

function listTasks() {
    if (tasks.length === 0) {
        alert("No hay tareas en la lista.");
    } else {
        let taskList = "Lista de tareas:\n";
        for (let i = 0; i < tasks.length; i++) {
            taskList += `${i + 1}. ${tasks[i]}\n`;
        }
        alert(taskList);
    }
}

function editTask(index, newTask) {
    if (!validateTaskName(newTask)) {
        alert("Error: El nuevo nombre de la tarea no puede estar vacío ni contener espacios al principio o al final.");
        return;
    }
    if (index >= 0 && index < tasks.length) {
        const oldTask = tasks[index];
        tasks[index] = newTask.trim();
        alert(`Tarea ${index + 1} cambiada de "${oldTask}" a "${newTask}".`);
    } else {
        alert("Índice de tarea inválido.");
    }
}

function deleteTask(index) {
    if (index >= 0 && index < tasks.length) {
        const deletedTask = tasks.splice(index, 1);
        alert(`Tarea "${deletedTask}" eliminada.`);
    } else {
        alert("Índice de tarea inválido.");
    }
}

taskManager();

