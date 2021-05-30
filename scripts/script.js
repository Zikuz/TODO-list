const inputTask = document.querySelector('.add-task')
const addBtn = document.querySelector('.add')
const listToDo = document.querySelector('.list-todo')
const listInProgress = document.querySelector('.list-inprogress')

addBtn.addEventListener('click', () => {
    if (inputTask.value != '""' && inputTask.value != ' ') {
        listToDo.innerHTML += `<li><span class='li'> ${inputTask.value} </span><button class='deleteBtn' onClick='deleteLi(this)'>X</button><button class='in-progress-btn'>O</button></li>`;
        inputTask.value = ''
    } else {
        inputTask.value = ''
    }
})

deleteLi = (e) => {
    e.parentElement.remove();
}

moveToInProgress = (e) => {

}