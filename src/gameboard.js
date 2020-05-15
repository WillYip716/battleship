import {ship} from './ship'


function gameboard(){
    let ships = [];
    let misses = [];


    const placeShip = function(arr){
        ships.push(ship(arr));
    }

    const checkWin = () => {
        for(let i in ships){
            if(!ships[i].isSunk()){
                return false;
            }
        }
        return true;
    }

    const receiveAttack = function(coords){
        for(let i in ships){
            if(ships[i].shipCoords().indexOf(coords)>-1){
                ships[i].hit(coords);
                return;
            }
        }
        misses.push(coords);
    }


    return {placeShip,checkWin,receiveAttack,misses};
    
}

export{gameboard}