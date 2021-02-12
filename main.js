let winner = "Winn/Lose"
let rock = 0
let paper = 1
let scissors = 2

let options = ["rock", "paper", "scissors"]
function draw(){

}
function playGame(player){
    let computer = getRandomStrike()
    //debugger
if (player == computer){
    console.log("tie")
}
else if (player === "rock"){
    if (computer === "paper"){
        console.log("try again")
    }else {
        console.log("you win")
    }
}else if (player === "paper"){
    if (computer === "rock"){
        console.log("winner")
    } else{
        console.log("try again")
    }
}else if (player === "scissors"){
    if (computer === "rock"){
        console.log("try again")
    }else {
        console.log("winner" + [])
    }
}
}
function playerRock(){
    console.log("You rock")
    playGame("rock")
    
    
}
function playerPaper(){
    console.log("You paper")
    playGame("paper")
}
function playerScissors(){
    console.log("You sciss")
    playGame("scissors")
}
function getRandomStrike(){
    let index = Math.floor(Math.random()* options.length)
    console.log(" computer choise", options[index]) 
    return (options[index])
}