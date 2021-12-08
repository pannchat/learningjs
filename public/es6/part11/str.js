
const MAX = 5000000;
const map2 = new Map();
const obj2 = {};

console.time("str Map Set");
for(let i = 0; i < MAX; i++){
    map2.set(`name${i}`, `Participation number`);
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

