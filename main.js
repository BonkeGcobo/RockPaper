window.onload = () =>{
    let player;
    let gameCounter = 0;
    let myscore = 0;
    let comp_score = 0;

    let rock = document.getElementById("hand");
    rock.onclick = function (){
        player = "Rock";

        if(gameCounter < 5){
            playRound(player,computerPlay());
            gameCounter++;
            console.log(gameCounter);
        }
        else {
            gameResults();
        }
             
    }

    let scissors = document.getElementById("scissors");
    scissors.onclick = function (){
      player="Scissors";
      if(gameCounter < 5){
        playRound(player,computerPlay());    
        gameCounter++;
      }
      else {
         gameResults();
      }
    }

/*    let Paper = document.getElementById("paper");
    Paper.onclick = function() {
      player="Paper";
      if(gameCounter < 5){
        playRound(player,computerPlay());
        gameCounter++;
      }
      else {
         gameResults();
      }
    }*/
        
   
    function computerPlay(){
        const values = ["Rock","Paper","Scissors"];
        values.sort(function(a,b){
            return 0.5 - Math.random();
        });
        return values[0];
    }
    /*computer=computerPlay();*/
    
    
    
    
    function playRound(playerselection, computerselection){
        /*console.log(playerselection , computerselection);*/
        if (playerselection=="Rock" && computerselection == "Paper"){
            let CompScore=document.getElementById("CompScore");
            let gameMsg=document.getElementById("gameMsg");
            comp_score++;
            console.log(comp_score);
            CompScore.innerHTML=comp_score;
            gameMsg.innerHTML= "You lose, paper beats rock";
        }

        else if(playerselection=="Rock" && computerselection=="Scissors"){
            let playerScore=document.getElementById("PlayeScore");
            let gameMsg=document.getElementById("gameMsg");
            myscore++;
            console.log(myscore);
            playerScore.innerHTML=myscore;
            gameMsg.innerHTML = "You win, rock beats scissors";
        }

        else if(playerselection=="Rock" && computerselection=="Rock"){
            let gameMsg=document.getElementById("gameMsg");
            gameMsg.innerHTML = "It's Tie";
        }

        else if (playerselection=="Paper"  && computerselection=="Scissors"){
            let CompScore=document.getElementById("CompScore");
            let gameMsg=document.getElementById("gameMsg");
            comp_score++;
            console.log(comp_score);
            CompScore.innerHTML=comp_score;
            gameMsg.innerHTML = "You lose, paper beats scissors";
        }
        else if (playerselection=="Paper" && computerselection=="Rock"){
            let playerScore=document.getElementById("PlayeScore");
            let gameMsg=document.getElementById("gameMsg");
            myscore++;
            console.log(myscore);
            playerScore.innerHTML=myscore;
            gameMsg.innerHTML = "You win, paper beats rock";
        }

        else if(playerselection=="Paper" && computerselection=="Paper"){
            let gameMsg=document.getElementById("gameMsg");
            gameMsg.innerHTML = "It's Tie";
        }

        else if(playerselection=="Scissors" && computerselection=="Rock"){
            console.log('Scissors');
            let CompScore=document.getElementById("CompScore");
            let gameMsg=document.getElementById("gameMsg");
            console.log("Okay!!!!!!");
            comp_score++;
            CompScore.innerHTML=comp_score;
            gameMsg.innerHTML = "You lose, rock beats Scissors";
        }

        else if (playerselection=="Scissors" && computerselection=="Paper"){
            console.log('Scissors');
            let playerScore=document.getElementById("PlayeScore");
            let gameMsg=document.getElementById("gameMsg");
            myscore++;
            console.log(myscore);
            playerScore.innerHTML=myscore;
            gameMsg.innerHTML = "You win, scissors beats paper";
        }

        else if (playerselection=="Scissors" && computerselection=="Scissors"){
            console.log('Scissors');
            let gameMsg=document.getElementById("gameMsg");            
            gameMsg.innerHTML = "It's Tie";
        }
        

    }
    

    function gameReset(){
     comp_score=0;
     myscore=0;
    }
    

    /*function game() {
        let counter= 0;    
        while(counter<5){
           console.log("Your Score:  " +myscore + "      Computer Score: "+comp_score );
           counter++;
        }*/
        
    
    function gameResults(){
        let message = document.getElementById("win-msg");
        if(myscore>comp_score){
            message.innerHTML = "You Won!";
            gameReset();
        }
        else if(myscore<comp_score){
            message.innerHTML = "You lose";
            gameReset();
        }
        else{
            message.innerHTML = "It's a tie";
            gameReset();
        }

    }
    
} 
