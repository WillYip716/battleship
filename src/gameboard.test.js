import {gameboard} from './gameboard'

test('test placeship, checkwin and receiveAttack',()=>{
    const holder = gameboard();
    holder.placeShip([12,22,32])
    holder.receiveAttack(12);
    holder.receiveAttack(22);
    holder.receiveAttack(32);
    holder.receiveAttack(44);
    expect(holder.checkWin()).toBe(true);
    expect(holder.misses).toEqual([44]);
    holder.placeShip([33,34,35,36]);
    expect(holder.checkWin()).toBe(false);
}); 