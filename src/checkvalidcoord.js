import {gameboard} from './gameboard'

function checkValid(arr,gameboard,alignment){
    let shipChart = [];
    for(let i in gameboard.ships){
        shipChart.push(gameboard.ships[i].shipCoords());
    }

    for(let j in arr){
        for(let k in shipChart){
            if(shipChart[k].indexOf(arr[j])>-1){
                return false;
            }
        }   
    }

    if(arr[arr.length-1] > 99){
        return false;
    }
    if(alignment=="x"){
        if(arr.length+arr[0]%10>10){
            return false;
        }
    }

    return true;
}

export {checkValid}