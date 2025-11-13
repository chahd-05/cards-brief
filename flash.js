const flash = document.getElementById("cards");
const questioninput = document.getElementById("question");
const answerinput = document.getElementById("answer");
const addcardbtn = document.getElementById("button");
const items = JSON.parse(localStorage.getItem("Flash"))||[];
addcardbtn.addEventListener("click", () =>{
    const question = questioninput.value.trim();
    const answer = answerinput.value.trim();

    if (question === "" || answer === ""){
        alert("3amar l input");
        return
    }

    const flashitem = document.createElement("div");
    flashitem.classList.add("flashcard");
    flashitem.innerHTML = `
    <div class=card-content>
        <div class=front>${question}</div>
        <div class=back>${answer}</div>
    </div>`;
    flashitem.addEventListener("click", () => {
        flashitem.classList.toggle("flipped");
    });
    flash.appendChild(flashitem);
    items.push({question, answer})
    localStorage.setItem("Flash",JSON.stringify(items));
    questioninput.value = "";
    answerinput.value = "";
    
}) 

window.addEventListener("DOMContentLoaded", ()=>{
    items.forEach(({question,answer})=>{
    const flashitem = document.createElement("div");
    flashitem.classList.add("flashcard");
    flashitem.innerHTML = `
    <div class=card-content>
        <div class=front>${question}</div>
        <div class=back>${answer}</div>
    </div>`;
    flashitem.addEventListener("click", () => {
        flashitem.classList.toggle("flipped");
    });
    flash.appendChild(flashitem);
    })
});