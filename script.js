const inputbox = document.getElementById("input-box");
const inputbox = document.getElementById("list-container");

function addTask(){
    if(inputbox.value ===''){
        alert("you must write something!");
    }
else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendhild(li);
    let span =document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    }
    inputBox.value="";

}
listContainer.addEventListener("click",function"(e){
    if(e.target.tagName ==="LI"){
        e.target.tagclassList.toggel("checked");
    }
    else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    }
}, false);