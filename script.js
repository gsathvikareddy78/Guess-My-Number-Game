// creating a secret number
let secretNumber=Math.trunc(Math.random()*20+1);
console.log(secretNumber);
let score=20;
let highscore=0;

// logic
document.getElementById('checkBtn').addEventListener('click',()=>{
    const guessedNo=Number(document.getElementById('guess').value);
    console.log(guessedNo);

    // if there is no input:
    if(!guessedNo){
        document.querySelector(".message").textContent="No Number!";
    }

    // when player wins:
    else if(guessedNo===secretNumber){
        document.querySelector(".message").textContent="Correct Number!";
        document.querySelector(".number").textContent=secretNumber;
    }
})
