let compScore = 0;
let userScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector(".user-score");
const compScorePara = document.querySelector(".comp-score");


choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    });
})

const playGame = (userChoice) => {
    // Generate computer choice
    const compChoice = generateCompChoice();
    // Change selected image
    changeImg(userChoice , compChoice)
    // Draw Condition
    if(userChoice === compChoice){
        drawGame();
    }
    // Win Condition
    else {
        let userWin = true;
        if(userChoice === "rock"){
            // paper / scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // rock / scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            // rock / paper
            userWin = compChoice === "rock" ? false : true;
        }
        checkWinner(userWin , userChoice , compChoice);
        
    }
}

const generateCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = 'Game draw';
    msg.style.backgroundColor = "#081b31";
} 

const checkWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

function changeImg(userChoice , compChoice) {
    const slectedImgUser = document.querySelector("#selected-img-user");
    const selectedImgComp = document.querySelector("#selected-img-comp");

    if(userChoice === "rock"){
        slectedImgUser.src = "rock-image.png";
    }
    else if(userChoice === "paper"){
        slectedImgUser.src = "paper-image.png";
    }
    else{
        slectedImgUser.src = "scissor-image.png";
    }

    if(compChoice === "rock"){
        selectedImgComp.src = "rock-image.png";
    }
    else if(compChoice === "paper"){
        selectedImgComp.src = "paper-image.png";
    }
    else{
        selectedImgComp.src = "scissor-image.png";
    }
}