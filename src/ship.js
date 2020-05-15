

function ship(arr){
    let hitChart = arr;
    const isSunk = function(){
        if(hitChart.length==0){
            return true;
        }
        return false;
    }
    const hit = function(coords){
        if(hitChart.indexOf(coords) > -1){
            hitChart.splice(hitChart.indexOf(coords),1);
        }
    }
    const shipCoords = function(){
        return hitChart;
    }

    return {isSunk,hit, shipCoords};
}

export {ship}