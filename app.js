const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    //start the game
    const startGame = () =>{
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');

        playButton.addEventListener('click', () =>{
            introScreen.classList.add("fadeOut");
            matchScreen.classList.add("fadeIn");
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand =>{
            hand.addEventListener("animationend", function(){
                this.style.animation = "";
            });
        })
        //computer options, generating random number (0,1,2)
        //Assingn random numbers to either rock, paper, or scissors
        const computerOptions = ['rock','paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener("click", function(){
                //the computer choice
                const computerNumber = Math.floor( Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                //Updating the images after  timeout of 2000 ms
                setTimeout(() =>{
                //Here we call compare hands function
                compareHands(this.textContent, computerChoice);

                //update images
                playerHand.src = `./img/${this.textContent}.png`;
                computerHand.src = `./img/${computerChoice}.png`;
                }, 2000);

             //Animation
               playerHand.style.animation =  "shakePlayer 2s ease";
               computerHand.style.animation = "shakeComputer 2s ease";
            }); 
        }); 
    };

//update score function, updation the scoreboard
    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };


// Comparing player hand and computer hand, then returning winner
    const compareHands = (playerChoice, computerChoice) =>{
        //update text
        const winner = document.querySelector('.winner')
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }
        //check for rock
        if(playerChoice === 'rock'){
           if(computerChoice === 'scissors') {
               winner.textContent = 'Player wins';
               pScore++;
               updateScore();
               return;
           }
           else{
               winner.textContent = 'Computer Wins';
               cScore++;
               updateScore();
               return;
           }
         }
         //check for paper
         if(playerChoice === 'paper'){
            if(computerChoice === 'scissors') {
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
          }
          //check for scissors
          if(playerChoice === 'scissors'){
            if(computerChoice === 'rock') {
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
          }
    };

    //Call all the innter functions
    startGame();
    playMatch();
};

//Call the game function
game();