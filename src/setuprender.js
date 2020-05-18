import {player1,compPlayer,compBoard,playerBoard} from './battleship'


function startRender(){
    let gameScreen = document.getElementsByTagName("body")[0];
    let cNode = gameScreen.cloneNode(false);
    gameScreen.parentNode.replaceChild(cNode,gameScreen);

    gameScreen = document.getElementsByTagName("body")[0];

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


        playerScreen.appendChild(pCoordButton);
        compScreen.appendChild(cCoordButton);
    }
}

export {startRender}