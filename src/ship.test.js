import {ship} from './ship'

test('test isSunk and coordinates array',()=>{
    const holder = ship([22,23,24]);
    holder.hit(22);
    holder.hit(23);
    //holder.hit(24);
    expect(holder.isSunk()).toBe(false);
    expect(holder.shipCoords()).toEqual([24]);
}); 