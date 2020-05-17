import {gameboard} from './gameboard'
import {player} from './player'

const player1 = player();
const compPlayer = player();
const playerBoard = gameboard();
playerBoard.placeShip([1,2,3,4,5]);
playerBoard.placeShip([11,21,31,41]);
playerBoard.placeShip([45,46,47]);
playerBoard.placeShip([63,73,83]);
playerBoard.placeShip([79,89]);
const compBoard = gameboard();
compBoard.placeShip([1,2,3,4,5]);
compBoard.placeShip([11,21,31,41]);
compBoard.placeShip([45,46,47]);
compBoard.placeShip([63,73,83]);
compBoard.placeShip([79,89]);

export{player1,compPlayer,compBoard,playerBoard}