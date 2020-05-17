import {gameboard} from './gameboard'

function player(){
    let legalShots = Array.from(Array(100).keys());
    const attack = function(coords,gameboard){

        gameboard.receiveAttack(coords);
        legalShots.splice(legalShots.indexOf(coords),1);
    }

    const randomAttack = function(gameboard){
        const randomShot = Math.floor(Math.random() * legalShots.length);
        gameboard.receiveAttack(randomShot);
        legalShots.splice(randomShot,1);
    }

    return {attack,randomAttack}
}

export {player}