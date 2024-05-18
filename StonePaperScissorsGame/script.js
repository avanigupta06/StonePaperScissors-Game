let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userCurrScore = document.querySelector("#user-score");
const compCurrScore = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["Stone", "Paper", "Scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () =>{
    console.log("game was draw");
    msg.innerText = "Game was draw. Try again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userCurrScore.innerText = userScore;
        console.log("you win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compCurrScore.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    console.log("User choice = ", userChoice);
    //Generate copmuter choice
    const compChoice= genCompChoice();
    console.log("Computer choice = ",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "Rock"){
            //scissors, paper
            userWin = compChoice === "Paper" ? false : true;
        } else if(userChoice === "Paper"){
            //rock, scissors
            userWin = compChoice ==="Scissors" ? false : true;
        }else{
            // rock, paper
            userWin = compChoice === "Stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
