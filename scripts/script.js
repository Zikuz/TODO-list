const inputTask = document.querySelector('.add-task')
const addBtn = document.querySelector('.add')
const listToDo = document.querySelector('.list-todo')
const listInProgress = document.querySelector('.list-inprogress')
const listDone = document.querySelector('.list-done')

addBtn.addEventListener('click', function() {
    if (inputTask.value != '' && inputTask.value != ' ') {
        listToDo.innerHTML += `
        <li><span class='li'>${inputTask.value}</span><div class='icons1'><img src='/images/delete.svg' class='deleteBtn' onClick='deleteLi(this)'><img src='/images/in-progress.svg' class='in-progress-btn' onClick='moveToInProgress(this)'><img src='/images/done.svg' class='done-btn' onClick='doneTask(this)'></div></li>`;
        inputTask.value = ''
    } else {
        inputTask.value = ''
        inputTask.classList.add('input-animation')
        setTimeout(() => {
            inputTask.classList.remove('input-animation')
        }, 1000);
    }
})

deleteLi = (e) => {
    e.parentElement.parentElement.remove();
}

moveToInProgress = (e) => {
    listInProgress.innerHTML += `<li><span class='li'>${e.parentElement.parentElement.childNodes[0].innerText} </span><div class='icons2'><img src='/images/delete.svg' class='deleteBtn' onClick='deleteLi(this)'><img src='/images/done.svg' class='done-btn' onClick='doneTask(this)'></div></li>`
    e.parentElement.parentElement.remove();
}

doneTask = (e) => {
    listDone.innerHTML += `<li><span class='li task-done'>${e.parentElement.parentElement.childNodes[0].innerText} </span><div class='icons3'><img src='/images/delete.svg' class='deleteBtn' onClick='deleteLi(this)'></div></li>`
    e.parentElement.parentElement.remove();
}

inputTask.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
   e.preventDefault();
   addBtn.click();
  }
});