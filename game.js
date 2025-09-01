let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const drawgame = () => {
    msg.innerText = "Draw";
    msg.style.background = "grey";
}

const gencompchoice = () => {
          const options = ["rock","paper","scissors"];
          const randidx = Math.floor(Math.random()*3);
          return options[randidx];
}

const showwinnner = (userwin, userchoice, compchoice) => {
    if(userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = "You Win";
        msg.style.background = "green";
    }else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = "You Loose";
        msg.style.background = "red";
    }
};

const playgame = (userchoice) => {
            console.log("userchoice =",userchoice);
            const compchoice = gencompchoice();
            console.log("compchoice =",compchoice);
            
    if(userchoice === compchoice){
          drawgame();
    }else {
        let userwin = true;
        if(userchoice === "rock") {
            userwin = compchoice ==="paper" ? false : true;   //scissors, paper
        }else if(userchoice ==="paper"){
            userwin = compchoice ==="scissors" ? false : true;   // rock, scissors
        }else{
            userwin = compchoice === "rock" ? false : true;       // rock, scissors
        }
        showwinnner(userwin,userchoice);
    }       
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");   
    console.log("choice was clicked",userchoice);
    playgame(userchoice);
    });
});