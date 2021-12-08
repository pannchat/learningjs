const map = new Map();
const obj = {};
const MAX = 5000000;

console.time("num Map Set");
for(let i = 0; i < MAX; i++){
    map.set(i, `Participation number ${i}`);
}
console.timeEnd("num Map Set");

console.time("num Object Set");
for(i = 0; i < MAX; i++){
		obj[i] = `Participation number ${i}`;
}
console.timeEnd("num Object Set");


console.time("num Map Get");
for(i = 0; i < MAX; i++){
    map.get(i);
}
console.timeEnd("num Map Get");



console.time("num Object Get");
for(i = 0; i < MAX; i++){
		obj[i];
}
console.timeEnd("num Object Get");
