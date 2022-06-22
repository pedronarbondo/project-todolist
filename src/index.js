import Edit from "../src/img/edit.png";
import DeleteIcon from "../src/img/trash.png";


function runModal() {
    // I borrowed this modal from W3Schools
let modal = document.getElementById("myModal");
let btn = document.getElementById("addButton");
let span = document.getElementsByClassName("close")[0];
let submit = document.getElementById("submit");

let descriptionInput = document.getElementById("description");
let priorityInput = Array.from(document.getElementsByName('priority'));
let detailsInput = document.getElementById("details");

btn.onclick = function() {
  modal.style.display = "block";
  descriptionInput.value = "";
  detailsInput.value = "";
  priorityInput.forEach(button => {
    if (button.checked) {
      button.checked = false
    }
  });
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
    let priorityInputValue = document.querySelector('input[name="priority"]:checked').value;
    createUserDom(descriptionInput.value, priorityInputValue, now, "Inbox", detailsInput.value);
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
    let notes = document.createElement("p");

    /* Task Content classes*/
    taskDiv.classList.add("task", myTask.priority);
    taskLeft.classList.add("taskLeft");
    taskRight.classList.add("taskRight");
    checkbox.classList.add("isComplete");
    taskText.classList.add("taskText");
    details.classList.add("details");
    date.classList.add("date");
    edit.classList.add("edit");
    deleteButton.classList.add("delete");
    notes.classList.add("notes");

    /* Text contents*/
    taskText.textContent = myTask.description;
    details.textContent = "DETAILS";
    date.textContent = myTask.date;
    notes.textContent = myTask.notes;

    /* Properties */
    edit.src = Edit;
    deleteButton.src = DeleteIcon;
    checkbox.setAttribute("type", "checkbox");
    
    /* Appendages */
    taskRight.append(notes, details, date, edit, deleteButton);
    taskLeft.append(checkbox, taskText);
    taskDiv.append(taskLeft, taskRight);
    mainDiv.append(taskDiv);

    pressDelete();
    runDetails();
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



function runDetails() {
  // I borrowed this modal from W3Schools
let modal = document.getElementById("modal2");
let btns = Array.from(document.getElementsByClassName("details"));
let span = document.getElementsByClassName("close")[1];
let descriptionSection = document.getElementsByClassName("descriptionSection")[0];
let prioritySection = document.getElementsByClassName("prioritySection")[0];
let detailsSection= document.getElementsByClassName("detailsSection")[0];


let descriptionContent = document.createElement("p");
let priorityContent = document.createElement("p");
let detailsContent = document.createElement("p");


  btns.forEach(btn => btn.onclick = function() {
  modal.style.display = "block";

  descriptionContent.textContent;
  priorityContent.textContent;
  detailsContent.textContent;

  descriptionSection.append(descriptionContent);
  prioritySection.append(priorityContent);
  detailsSection.append(detailsContent);
  
    });
    
  span.onclick = function() {
  modal.style.display = "none";
  }
  window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  }
}

runDetails();
runModal()

/*
  btns.forEach(btn => btn.addEventListener("click", function() {
  modal.style.display = "block";

  let target = event.target;
  let currentTask = target.parentElement.parentElement;
  
  descriptionContent.textContent = currentTask.firstChild.firstElementChild.nextElementSibling.value;
  priorityContent.textContent = currentTask.classList[2];
  detailsContent.textContent = currentTask.firstChild.nextSibling.firsElementChild.value;

  descriptionSection.append(descriptionContent);
  prioritySection.append(priorityContent);
  detailsSection.append(detailsContent);
  
    });
*/