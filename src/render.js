import {player1,compPlayer,compBoard,playerBoard} from './battleship'

function render(){
    let gameScreen = document.getElementsByTagName("body")[0];
    let cNode = gameScreen.cloneNode(false);
    gameScreen.parentNode.replaceChild(cNode,gameScreen);

    gameScreen = document.getElementsByTagName("body")[0];
    let playerScreen = document.createElement("div");
    playerScreen.classList.add("screen");
    let compScreen = document.createElement("div");
    compScreen.classList.add("screen");

    for(let i=0;i<100;i++){
        let pCoordButton = document.createElement("button");
        pCoordButton.id = "pcoord" + i;
        pCoordButton.className = "coords";
        if(playerBoard.hits.indexOf(i)>-1){
            pCoordButton.classList.add("hit");
        }
        else if(playerBoard.misses.indexOf(i)>-1){
            pCoordButton.classList.add("miss");
        }
        
    
        let cCoordButton = document.createElement("button");
        cCoordButton.id = "pcoord" + i;
        cCoordButton.className = "coords";
        if(compBoard.hits.indexOf(i)>-1){
            cCoordButton.classList.add("hit");
        }
        else if(compBoard.misses.indexOf(i)>-1){
            cCoordButton.classList.add("miss");
        }
        else{
            cCoordButton.onclick = function(){
                player1.attack(i,compBoard);
                if(compBoard.checkWin()){
                    render();
                    alert("You Win");
                }
                compPlayer.randomAttack(playerBoard);
                if(playerBoard.checkWin()){
                    render();
                    alert("You Lose");
                }
                else{
                    render();
                }
            }
        }

        playerScreen.appendChild(pCoordButton);
        compScreen.appendChild(cCoordButton);
    }

    
    gameScreen.appendChild(playerScreen);
    gameScreen.appendChild(compScreen);
}


export {render}