import {player1,compPlayer,compBoard,playerBoard} from './battleship'

function render(){
    let playerScreen = document.createElement("div");
    playerScreen.classList.add("screen");
    let compScreen = document.createElement("div");
    compScreen.classList.add("screen");

    for(let i=0;i<100;i++){
        let pCoordButton = document.createElement("button");
        pCoordButton.id = "pcoord" + i;
        pCoordButton.className = "coords";
        pCoordButton.onclick = function(){
            console.log("you have clicked pcoord " + i);
        }
    
        let cCoordButton = document.createElement("button");
        cCoordButton.id = "pcoord" + i;
        cCoordButton.className = "coords";
        cCoordButton.onclick = function(){
            console.log("you have clicked cCoordButton " + i);
        }

        playerScreen.appendChild(pCoordButton);
        compScreen.appendChild(cCoordButton);


    }

    let gameScreen = document.getElementsByTagName("body")[0];
    gameScreen.appendChild(playerScreen);
    gameScreen.appendChild(compScreen);
}


export {render}