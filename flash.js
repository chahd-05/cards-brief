const flash = document.getElementById("cards");
const questioninput = document.getElementById("question");
const answerinput = document.getElementById("answer");
const addcardbtn = document.getElementById("button");
const filterbtn = document.getElementById("filterbtn");
const filter = document.getElementById("filter");
const input = document.getElementById("input");
const title = document.getElementById("title");

const items = JSON.parse(localStorage.getItem("Flash")) || [];
const categories = JSON.parse(localStorage.getItem("catstorage")) || [];
console.log(categories);

addcardbtn.addEventListener("click", () => {
  const question = questioninput.value.trim();
  const answer = answerinput.value.trim();
  const  str = input.value;

  if (question === "" || answer === "") {
    alert("fill out the question and the answer input");
    return;
  }

  const flashitem = document.createElement("div");
  flashitem.classList.add("flashcard");
  flashitem.dataset.str = str;
  flashitem.innerHTML = `
    <div class=card-content>
        <div class=front>${question}</div>
        <div class=back>${answer}</div>
    </div>`;
  flashitem.addEventListener("click", () => {
    flashitem.classList.toggle("flipped");
  });
  flash.appendChild(flashitem);
  items.push({ question, answer, str });
  localStorage.setItem("Flash", JSON.stringify(items));
  questioninput.value = "";
  answerinput.value = "";



  const selected = filter.value;
document.querySelectorAll(".flashcard").forEach(flashitem =>{
    if (selected === "all" || flashitem.dataset.str === selected){
    flashitem.style.display = "block";
} 
else {
    flashitem.style.display = "none";
}
})
});

window.addEventListener("DOMContentLoaded", () => {
  categories.forEach((e) => {
    const option = document.createElement("option");
    option.value = e;
    option.textContent = e;
    input.appendChild(option);

    const filtoption = document.createElement("option");
    filtoption.value = e;
    filtoption.textContent = e;
    filter.appendChild(filtoption);
  });
  items.forEach(({ question, answer, str }) => {
    const flashitem = document.createElement("div");
    flashitem.classList.add("flashcard");
    flashitem.dataset.str = str;
    flashitem.innerHTML = `
    <div class=card-content>
        <div class=front>${question}</div>
        <div class=back>${answer}</div>
    </div>`;
    flashitem.addEventListener("click", () => {
      flashitem.classList.toggle("flipped");
    });
    flash.appendChild(flashitem);
  });
});

filterbtn.addEventListener("click", () => {
  const newcategory = title.value.trim();
  if (newcategory === "") {
    alert("type the title");
    return;
  }
 
  const option = document.createElement("option");
  option.value = newcategory;
  option.textContent = newcategory;
  input.appendChild(option);

  const filtoption = document.createElement("option");
  filtoption.value = newcategory;
  filtoption.textContent = newcategory;
  filter.appendChild(filtoption);

  categories.push(newcategory);
  localStorage.setItem("catstorage", JSON.stringify(categories));

  title.value = "";
});
filter.addEventListener("change" , ()=>{
const selected = filter.value||"all";
document.querySelectorAll(".flashcard").forEach(flashitem =>{
    if (selected === "all" || flashitem.dataset.str === selected){
    flashitem.style.display = "block";
} 
else {
    flashitem.style.display = "none";
}
})

})