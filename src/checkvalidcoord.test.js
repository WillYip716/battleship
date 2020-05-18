import {checkValid} from './checkvalidcoord'
import {gameboard} from './gameboard'

test('test validity check for ships',()=>{
    const holder = gameboard();
    holder.placeShip([12,22,32]);
    const test1 = [11,12,13];
    const test2 = [17,18,19,20];
    const test3 = [55,56,57,58,59];
    const test4 = [75,85,95,105];
    
    expect(checkValid(test1,holder,"x")).toBe(false);
    expect(checkValid(test2,holder,"x")).toBe(false);
    expect(checkValid(test3,holder,"x")).toBe(true);
    holder.placeShip([55,56,57,58,59]);
    expect(checkValid(test3,holder,"x")).toBe(false);
    expect(checkValid(test4,holder,"x")).toBe(false);
}); 