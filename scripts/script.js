const inputTask = document.querySelector('.add-task')
const addBtn = document.querySelector('.add')
const listToDo = document.querySelector('.list-todo')
const listInProgress = document.querySelector('.list-inprogress')
const listDone = document.querySelector('.list-done')

addBtn.addEventListener('click', function() {
    if (inputTask.value != 'a' && inputTask.value != ' ') {
        listToDo.innerHTML += `
        <li><span class='li'>${inputTask.value}</span> <button class='deleteBtn' onClick='deleteLi(this)'>X</button><button class='in-progress-btn' onClick='moveToInProgress(this)'>O</button></li>`;
        inputTask.value = ''
    } else {
        inputTask.value = ''
    }
})

deleteLi = (e) => {
    e.parentElement.remove();
}

moveToInProgress = (e) => {
    listInProgress.innerHTML += `<li><span class='li'>${e.parentElement.textContent}</span> <button class='deleteBtn' onClick='deleteLi(this)'>X</button><button class='doneBtn' onClick='doneLi(this)'>V</button></li>`
    e.parentElement.remove();
}

doneLi = (e) => {
    listDone.innerHTML += `<li><span class='li li-done'>${e.parentElement.textContent}</span> <button class='deleteBtn' onClick='deleteLi(this)'>X</button></li>`
    e.parentElement.remove();
}

inputTask.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
   e.preventDefault();
   addBtn.click();
  }
});