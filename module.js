const mod1=require('./module'); 
 
console.log(mod1.name); 
 
const mod2=require('./module'); 
mod1.name="Hello"; 
 
console.log(mod2.name); 
console.log(mod1.name); 
mod1.test(); 
mod2.test();

//var name = "PU221";
//module.exports.name = name;


// let x=0;
// function test(){
//     console.log(x);
// }
// //global.number=x;
// //global.func=test;

// module.exports = {
//     number:x,
//     func:test
// };
