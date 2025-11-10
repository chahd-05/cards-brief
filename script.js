

let questionnumb = 0;
let data = [];
const question = document.getElementById("questiontext");
const border = document.getElementById("border")
const truebtn = document.getElementById("truebtn");
const falsebtn = document.getElementById("falsebtn");

async function getquestions(){
    const res = await fetch('quiz.json');
    data = await res.json();
    showQuestions();
}

function showQuestions(){
    const num = data[questionnumb];
    question.textContent = num.Question;
    truebtn.style.display = "block";
        falsebtn.style.display = "block";
   
    border.style.backgroundColor = "purple";
}

truebtn.onclick = () =>btn("True")
falsebtn.onclick =() =>btn("False")
function btn(selected){
    const answer = data[questionnumb].answer;
    if (selected === answer){
        border.style.backgroundColor = "green";
        truebtn.style.display = "none";
        falsebtn.style.display = "none";
    }
    else {
        border.style.backgroundColor = "red";
       truebtn.style.display = "none"; 
        falsebtn.style.display = "none";
    }
}

function nextup(){
    questionnumb++;
    
    if (questionnumb >= data.length) {
        question.textContent = "Finished!";
        return;
    }
    
    showQuestions();
}

getquestions();



