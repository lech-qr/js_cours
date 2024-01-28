let todoInput
let errorInfo
let addBtn
let ulList
let newTodo

//Popup
let popup //popup
let popupInfo //tekst w popupie, jak się doda pusty tekst
let todoToEdit //edytowany Todo
let popupInput //input w popupie
let popupAddBtn //przycisk 'zatwierdź' w popupie
let popupCloseBtn //przycisk 'anuluj' w popupie

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    // pobieranie wszystkich elementów
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
    // pobieranie elementów popup
    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
}
const prepareDOMEvents = () => {
    // nasłuchiwanie
    addBtn.addEventListener('click', addNewTodo)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopup)
    popupAddBtn.addEventListener('click', changeTodoText)
    todoInput.addEventListener('keyup', enterKeyCheck)
}

// Dodawanie tudusa
const addNewTodo = () => {
    if (todoInput.value !== '') {
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        ulList.prepend(newTodo)
        createToolsArea()
        todoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania!'
    }
}

// Funkcja dodająca toolsy
const createToolsArea = () => {
    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add("tools");

    newTodo.append(toolsPanel)

    toolsPanel.innerHTML = ('<button class="complete"><span class="material-symbols-outlined">done</span></button><button class="edit">EDIT</button><button class="delete"><span class="material-symbols-outlined">close</span></button>')
}

// Sprzwdzamy, który przycisk został kliknięty
const checkClick = e => {
    if (e.target.matches('.complete')) {
        // Dodawanie klasy completed
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    } else if (e.target.matches('.edit')) {
        editTodo(e)
    } else if (e.target.matches('.delete')) {
        deleteTodo(e)
    };
}


// Funkcja dotycząca popup
const editTodo = e => {
    todoToEdit = e.target.closest('li')
    popupInput.value = todoToEdit.firstChild.textContent
    popup.style.display = 'flex'
}
const closePopup = () => {
    popup.style.display = 'none'
    popupInfo.textContent = ''
}

// Edycja zadania w popup
const changeTodoText = () => {
    if (popupInput.value !== '') {
        todoToEdit.firstChild.textContent = popupInput.value
        popup.style.display = 'none'
        popupInfo.textContent = ''
    } else {
        popupInfo.textContent = 'Musisz podać jakąś treść!'
    }
}

// Usuwanie elementów z listy
const deleteTodo = e => {
    e.target.closest('li').remove()
    const allTodos = ulList.querySelectorAll('li')
    if (allTodos.length === 0) {
        errorInfo.textContent = 'Brak zadań na liście.'
    }
}

// Dodawanie na Enter
const enterKeyCheck = e => {
    if(e.key === 'Enter') {
        addNewTodo()
    }
}


document.addEventListener('DOMContentLoaded', main)