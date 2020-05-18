import {playerBoard} from './battleship'
import {checkValid} from './checkvalidcoord'
import {render} from './render'


function startRender(alignment){
    let shipLength = 0;
    if(playerBoard.ships.length == 0){
        shipLength = 5;
    }
    if(playerBoard.ships.length == 1){
        shipLength = 4;
    }
    if(playerBoard.ships.length == 2){
        shipLength = 3;
    }
    if(playerBoard.ships.length == 3){
        shipLength = 3;
    }
    if(playerBoard.ships.length == 4){
        shipLength = 2;
    }
    

    let gameScreen = document.getElementsByTagName("body")[0];
    let cNode = gameScreen.cloneNode(false);
    gameScreen.parentNode.replaceChild(cNode,gameScreen);

    gameScreen = document.getElementsByTagName("body")[0];
    let playerScreen = document.createElement("div");
    playerScreen.classList.add("screen");

    let shipChart = [];
    for(let z in playerBoard.ships){
        for(let y in playerBoard.ships[z].shipCoords()){
            shipChart.push(playerBoard.ships[z].shipCoords()[y]);
        } 
    }

    console.log(shipChart);
    for(let i=0;i<100;i++){
        let shipsCoordsHolder = [];
        let pCoordButton = document.createElement("button");
        pCoordButton.id = "pcoord" + i;
        pCoordButton.className = "coords";
        if(shipChart.indexOf(i)>-1){
            pCoordButton.classList.add("hovership");
        }
        else{
            for(let j=0;j < shipLength;j++){
                if(alignment=="x"){
                    shipsCoordsHolder.push(i+j);
                }
                else{
                    shipsCoordsHolder.push(i+j*10);
                }
            }
            
            if(checkValid(shipsCoordsHolder,playerBoard,alignment)){
                pCoordButton.onmouseover = function(){
                    for(let k in shipsCoordsHolder){
                        document.getElementById("pcoord"+shipsCoordsHolder[k]).classList.add("hovership");
                    }
                }
                pCoordButton.onmouseleave = function(){
                    for(let k in shipsCoordsHolder){
                        document.getElementById("pcoord"+shipsCoordsHolder[k]).classList.remove("hovership");
                    }
                }
                pCoordButton.onclick = function(){
                    playerBoard.placeShip(shipsCoordsHolder);             
                    if(playerBoard.ships.length == 5){
                        render();
                    }
                    else{
                        startRender(alignment);
                    }
                }
            }
        }
        playerScreen.appendChild(pCoordButton);
    }

    gameScreen.appendChild(playerScreen);
}

export {startRender}