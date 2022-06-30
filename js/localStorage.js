const form= document.querySelector("#addthought");
const listThoughts = document.querySelector("#listThoughts");
let thoughts = [];


form.addEventListener("submit", addThought);
// Cuando el documento esta listo
document.addEventListener( 'DOMContentLoaded', cargarThoughts);


function addThought(e){
    e.preventDefault();
    const thoughtValue = document.querySelector("#thoughtTextBox").value;
    //console.log(thoughtValue);
    const thoughtObject = {
        id: Date.now(),
        text: thoughtValue
    }
    thoughts = [...thoughts, thoughtObject];
    const thoughtsStringified = JSON.stringify(thoughts);
    localStorage.setItem('thoughtsLS', thoughtsStringified);
    console.log(thoughtsStringified);
    cargarThoughts();
    let thoughtBox = document.querySelector("#thoughtTextBox");
    thoughtBox.value ="";
}

function cargarThoughts(){
    thoughts = JSON.parse(localStorage.getItem("thoughtsLS") || []);
    console.log(thoughts);
    createHTML();
}

function createHTML() {
    cleanHTML();
    if(thoughts.length > 0){
        thoughts.forEach ( thoughtObject => {
            const li = document.createElement ('li');
            li.innerText = thoughtObject.text;
            li.classList.add("elementList");
            listThoughts.appendChild (li);
        });
    }
    syncStorage();
}

function syncStorage(){
    localStorage.setItem('thoughtsLS', JSON.stringify(thoughts));
}

function cleanHTML(){
    while (listThoughts.firstChild){
        listThoughts.removeChild(listThoughts.firstChild);
    }
}
