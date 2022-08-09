getToDoList();

let takenLijst = document.getElementById("lijst");
const newTaskPlace = document.getElementById("new-item");
const addItem = document.getElementById("submit");
addItem.addEventListener("click", postToDoList);

function printList(toDoList) {   
    toDoList.forEach(toDo => {
        let listItem = document.createElement("li");
        takenLijst.appendChild(listItem)
        const bin = document.createElement("img");
        bin.addEventListener("click", deleteTask);
        const binatt = document.createAttribute("src");
        const binatt2 = document.createAttribute("class");
        binatt.value = "./icons8-bin-48.png";
        binatt2.value = "bin";
        bin.setAttributeNode(binatt);
        bin.setAttributeNode(binatt2);
        const txt = document.createElement("div");
        txt.innerText = toDo.description;
        const idAtt = document.createAttribute("id");
        idAtt.value = toDo._id;
        txt.setAttributeNode(idAtt);
        listItem.append(txt);
        listItem.appendChild(bin);  
    });
};   


