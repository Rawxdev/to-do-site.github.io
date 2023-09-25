const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        //It will give alert if something is not written in input field
        alert("You must write something!");
    }
    else{
        //It is creating one html element and it is storing this element in li variable.
        let li = document.createElement("li");
        //Below line will enter whatever is entered in the input field in the li element
        li.innerHTML = inputBox.value;
        //Below line is appending li to the list-container created in html document
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}
//This line adds a click event listener to the "listContainer" element. 
//When a click event occurs within this container, the provided function will be executed.

listContainer.addEventListener("click", function(e){

/*Inside the event listener function, it checks if the clicked element's tag name is "LI," which corresponds to list items.
e.target represents the actual element that was clicked. 
e.target.classList.toggle("checked");: This line toggles the "checked" class of the clicked list item. 
This class is typically used for styling to visually indicate that an item has been checked or completed.*/

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
/* If the clicked element is not an LI but instead has a tag name of "SPAN," it proceeds to the following actions:
This part of the code assumes that SPAN elements represent some kind of deletion or removal action.
e.target.parentElement.remove();: It removes the parent element of the clicked SPAN, which is likely an LI element.
This effectively deletes the entire list item.*/

    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
//Below line will save the data to the browsers local storage.And we mentioned it in every function so that it save the data after every change.

    localStorage.setItem("data", listContainer.innerHTML);

}
function showTask(){
   listContainer.innerHTML = localStorage.getItem("data");
}
showTask();