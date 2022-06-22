import Edit from "../src/img/edit.png";
import DeleteIcon from "../src/img/trash.png";


function runModal() {
    // I borrowed this modal from W3Schools
let modal = document.getElementById("myModal");
let btn = document.getElementById("addButton");
let span = document.getElementsByClassName("close")[0];
let submit = document.getElementById("submit");

let descriptionInput = document.getElementById("description");
let priorityInput = document.querySelector("input[type='radio'][name='priority']");
let detailsInput = document.getElementById("details");

btn.onclick = function() {
  modal.style.display = "block";
  descriptionInput.value = "";
  detailsInput.value = "";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
submit.onclick = function() {
    modal.style.display = "none";
    let now = new Date()
    createUserDom(descriptionInput.value, priorityInput.value, now, "Inbox", detailsInput.value);
  }

}


 function createTaskObject(description, priority, date, project, notes) {
    class Task {
        constructor(description, priority, date, project) {
            this.description = description;
            this.priority = priority;
            this.date = `${date.getDate()}-0${date.getMonth()+1}`;
            this.project = project;
            this.notes = notes;
        }
    }
    let task = new Task(description, priority, date, project, notes);
    return task;
}


function createUserDom(userDescription, userPriority, userDate, userProject, userDetails) {
    let myTask = createTaskObject(userDescription, userPriority, userDate, userProject, userDetails);
    let mainDiv = document.getElementById("main");

    /* Task Content */
    let taskDiv = document.createElement("div");
    let taskLeft = document.createElement("div");
    let taskRight = document.createElement("div");
    let checkbox = document.createElement("input")
    let taskText = document.createElement("p");
    let details = document.createElement("button");
    let date = document.createElement("p");
    let edit = document.createElement("img");
    let deleteButton = document.createElement("img");

    /* Task Content classes*/
    taskDiv.classList.add("task", myTask.priority);
    taskLeft.classList.add("taskLeft");
    taskRight.classList.add("taskRight");
    checkbox.classList.add("isComplete");
    taskText.classList.add("taskText");
    details.classList.add("details");
    date.classList.add("date");
    edit.classList.add("edit");
    deleteButton.classList.add("delete")

    /* Text contents*/
    taskText.textContent = myTask.description;
    details.textContent = "DETAILS";
    date.textContent = myTask.date;

    /* Properties */
    edit.src = Edit;
    deleteButton.src = DeleteIcon;
    checkbox.setAttribute("type", "checkbox");
    
    /* Appendages */
    taskRight.append(details, date, edit, deleteButton);
    taskLeft.append(checkbox, taskText);
    taskDiv.append(taskLeft, taskRight);
    mainDiv.append(taskDiv);
    
    pressDelete();
}

function pressDelete() {
    let mainSection = document.getElementById("main");
    let deleteButton = Array.from(document.getElementsByClassName("delete"));
    deleteButton.forEach(button => {
        button.addEventListener("click", function(event) {
            let target = event.target;
            let currentTask = target.parentElement.parentElement;
            mainSection.removeChild(currentTask);
        })
    })
}

runModal();
