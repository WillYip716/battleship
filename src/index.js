import {render} from './render'
import {startRender} from './setuprender'

window.onload=function(){
    
    let alignment ="x";
    startRender(alignment);
    document.addEventListener('keydown', function(event){
        if(event.keyCode==38||event.keyCode==40){
            (alignment=="x")?alignment="y":alignment="x";
            startRender(alignment);
        }
    });
    
}
