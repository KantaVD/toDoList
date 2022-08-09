const url = "http://localhost:3000/";
async function getToDoList() {
    let respons =  await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
    });
    let toDoList = await respons.json();
    printList(toDoList);
};

function postToDoList() {
    const newTask = newTaskPlace.value;
    const data = {description: newTask, done: false};
    if (newTask !== "") {
        
        fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        });
    }else{
        alert("Maak een taak aan")
    };
    newTaskPlace.value = "";
    takenLijst.innerHTML = "";
    getToDoList();
};

function deleteTask(event) {
    let target = event.target;
    const taskId =target.previousSibling.id;
    fetch(url + taskId, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
    });
    takenLijst.innerHTML = "";
    getToDoList();
};
