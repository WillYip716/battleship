!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(){let e=[],t=[],n=[];return{placeShip:function(t){e.push(function(e){let t=e;return{isSunk:function(){return 0==t.length},hit:function(e){t.indexOf(e)>-1&&t.splice(t.indexOf(e),1)},shipCoords:function(){return t}}}(t))},checkWin:()=>{for(let t in e)if(!e[t].isSunk())return!1;return!0},receiveAttack:function(o){for(let t in e)if(e[t].shipCoords().indexOf(o)>-1)return e[t].hit(o),void n.push(o);t.push(o)},misses:t,hits:n}}function r(){let e=Array.from(Array(100).keys());return{attack:function(t,n){n.receiveAttack(t),e.splice(e.indexOf(t),1)},randomAttack:function(t){const n=Math.floor(Math.random()*e.length);t.receiveAttack(n),e.splice(n,1)}}}n.r(t);r(),r();const c=o();c.placeShip([1,2,3,4,5]),c.placeShip([11,21,31,41]),c.placeShip([45,46,47]),c.placeShip([63,73,83]),c.placeShip([79,89]);const i=o();i.placeShip([1,2,3,4,5]),i.placeShip([11,21,31,41]),i.placeShip([45,46,47]),i.placeShip([63,73,83]),i.placeShip([79,89]),window.onload=function(){!function(){let e=document.createElement("div");e.classList.add("screen");let t=document.createElement("div");t.classList.add("screen");for(let n=0;n<100;n++){let o=document.createElement("button");o.id="pcoord"+n,o.className="coords",o.onclick=function(){console.log("you have clicked pcoord "+n)};let r=document.createElement("button");r.id="pcoord"+n,r.className="coords",r.onclick=function(){console.log("you have clicked cCoordButton "+n)},e.appendChild(o),t.appendChild(r)}let n=document.getElementsByTagName("body")[0];n.appendChild(e),n.appendChild(t)}()}}]);