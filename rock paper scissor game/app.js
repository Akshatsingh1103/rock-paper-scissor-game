let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#userscore");
const computerScore = document.querySelector("#computerscore");

const genComputerChoice = () => {
    const options= ["rock" , "paper", "scissor"];
    const randomInx = Math.floor(Math.random() * 3);
    return options[randomInx];

   
}

const drawgame = () => {
    console.log("Game was draw");
    msg.innerText="Game was draw";
    msg.style.backgroundColor = "grey"
} 
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userscore++;
        userScore.innerText = userscore;

        console.log("you win")
        msg.innerText = `you win! your ${userChoice} beats ${compChoice} `
        msg.style.backgroundColor = "green"
    }else{
        computerscore++
        computerScore.innerText = computerscore;
        msg.innerText = `You lose! computer's choice ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red"
    }
        

}

const playGame = (userChoice) => {
    console.log("userChoice =", userChoice);

    const compChoice = genComputerChoice();
    console.log("computer choice =",compChoice);

    if(userChoice === compChoice) {
        drawgame();  
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false  : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        

        

    })
})