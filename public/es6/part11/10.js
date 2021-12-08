let startTime = new Date();
const map = new Map();
const obj = {};
const MAX = 5000000;

// console.time("num Map Set");
// for(let i = 0; i < MAX; i++){
//     map.set(i, `Participation number ${i}`);
// }
// console.timeEnd("num Map Set");

// console.time("num Object Set");
// for(i = 0; i < MAX; i++){
// 		obj[i] = `Participation number ${i}`;
// }
// console.timeEnd("num Object Set");


// console.time("num Map Get");
// for(i = 0; i < MAX; i++){
//     map.get(i);
// }
// console.timeEnd("num Map Get");



// console.time("num Object Get");
// for(i = 0; i < MAX; i++){
// 		obj[i];
// }
// console.timeEnd("num Object Get");


console.log();
let startTime2 = new Date();
const map2 = new Map();
const obj2 = {};

console.time("str Map Set");
for(let i = 0; i < MAX; i++){
    map2.set(`name${i}`, `Participation number ${i}`);
}
console.timeEnd("str Map Set");

console.time("str Object Set");
for(i = 0; i < MAX; i++){
		obj2[`name${i}`] = `Participation number ${i}`;
}
console.timeEnd("str Object Set");

console.time("str Map Get");
for(i = 0; i < MAX; i++){
    map2.get(`name${i}`);
}
console.timeEnd("str Map Get");



console.time("str Object Get");
for(i = 0; i < MAX; i++){
		obj2[`name${i}`];
}
console.timeEnd("str Object Get");

