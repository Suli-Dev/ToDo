// const input = document.querySelector('#input')
// const submitButton = document.querySelector('#submit')
const from = document.querySelector('#from')
const list = document.querySelector('#list')

from.addEventListener('submit', onFromSubmit )

function onFromSubmit(event) {
    event.preventDefault()
    const fromElement = event.target
    const inputElement = fromElement.text
    const todoName = inputElement.value


    const newTodo = document.createElement('li')
    newTodo.classList.add('todo')
    newTodo.innerHTML = `
    <div>
        <span class="todo-name">${todoName}</span>
        <button class="delete-btn"> Удалить </button>
        <button class="edit-btn"> Редактировать </button>
    </div>
    `;

    list.appendChild(newTodo)
    const task = Array.from(list.children).find((el) => el === newTodo)
    task.addEventListener('click', (e) => {
        const isDeleteButton = e.target.classList.toString() === 'delete-btn'
        const isEditButton = e.target.classList.toString() === 'edit-btn'
        if (isDeleteButton) onTaskDelete(task)
        if (isEditButton) onTaskEdit(task)
    })


    inputElement.value = ''
}

function onTaskDelete(task) {
    task.remove()
}
function onTaskEdit(task) {
    const newTodoName = prompt('Введите новое название задачи')
    const isValid = newTodoName.length > 3 && newTodoName.length < 20
    if (isValid) {
        const span = task.querySelector('.todo-name')
        span.innerHTML = newTodoName
    } else alert('Длина названия должна быть больше 3 и меньше 20')
}