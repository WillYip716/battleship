import {gameboard} from './gameboard'
import {player} from './player'
import {checkValid} from './checkvalidcoord'
import { ship } from './ship';

const player1 = player();
const compPlayer = player();
const playerBoard = gameboard();
const compBoard = gameboard();
const shipOrder = [5,4,3,3,2];
let coords,ali;
for(let i in shipOrder){
    (Math.round(Math.random())==1)?ali="x":ali="y";
    coords = generateCoords(shipOrder[i],ali);
    while(!checkValid(coords,compBoard,ali)){
        (Math.round(Math.random())==1)?ali="x":ali="y";
        coords = generateCoords(shipOrder[i],ali);
    }
    compBoard.placeShip(coords);
    console.log(coords);
}

function generateCoords(length,ali){
    let anchor = Math.floor(Math.random() * 100);
    
    let shipcoords = [];
    for(let j=0;j < length;j++){
        if(ali=="x"){
            shipcoords.push(anchor+j);
        }
        else{
            shipcoords.push(anchor+j*10);
        }
    }
    return shipcoords;
}
/*compBoard.placeShip([1,2,3,4,5]);
compBoard.placeShip([11,21,31,41]);
compBoard.placeShip([45,46,47]);
compBoard.placeShip([63,73,83]);
compBoard.placeShip([79,89]);*/

export{player1,compPlayer,compBoard,playerBoard}