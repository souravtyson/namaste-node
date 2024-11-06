// 'use strict';
// console.log(global);
// console.log(globalThis);
// console.log(globalThis === global);
// console.log(globalThis.globalThis.globalThis)
console.log(this)

function howru() {
    console.log("inside how r u")
    // console.log(this)
    console.log(this === globalThis)
}

function hello(){
    console.log("inside hello")
    console.log(this.global === global.global)
    howru()
}

hello()