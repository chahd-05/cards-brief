

let questionnumb = 0;
let data = [];
const question = document.getElementById("questiontext");
const border = document.getElementById("border")
const truebtn = document.getElementById("truebtn");
const falsebtn = document.getElementById("falsebtn");
let score = 0;
const high = document.getElementById("high-score");
const result = document.getElementById("score");
let highscore = parseInt(localStorage.getItem("high")) || 0;
high.textContent = "The highest score is : " + highscore;
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
        score ++;
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
        result.textContent = "your score is : " + score;
        if (highscore < score){
            highscore = score;
            localStorage.setItem("high" , highscore);
        }
        high.textContent = "The highest score is : " + highscore;
        return;
    }
    
    showQuestions();
}

getquestions();
 function restart(){
    window.location.reload();

 }


