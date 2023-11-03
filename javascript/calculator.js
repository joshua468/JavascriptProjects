const num1 = Math.ceil (Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");
const formEl = document.getElementById("form")

let score = 0;

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;


const correctAns = num1 * num2;

formEl.addEventListener("submit",()=>{
    const userAns = +inputEl.value
    if (userAns === correctAns) {
       score++
       updateLocalStorage()
    }else{   
       updateLocalStorage()
    }
})
function updateLocalStorage(){
    localStorage.getItem("score", JSON.stringify(score))
}
