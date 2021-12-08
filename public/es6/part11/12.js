let startTime = new Date();
const map = new Map();
const obj = {};
const MAX = 5000000;

console.time("num Map Set");
for (let i = 0; i < MAX; i++) {
  map.set(i, `Participation number ${i}`);
}
console.timeEnd("num Map Set");
// console.log('Map num set running(s)@',(new Date().getTime() - startTime.getTime()) / 1000);

// startTime = new Date();
console.time("num Object Set");
for (i = 0; i < MAX; i++) {
  obj[i] = `Participation number ${i}`;
}
console.timeEnd("num Object Set");
// console.log('Object num set running(s)@',(new Date().getTime() - startTime.getTime()) / 1000);

// startTime = new Date();
console.time("num Map Get");
for (i = 0; i < MAX; i++) {
  map.get(i);
}
console.timeEnd("num Map Get");
// console.log('Map num get running(s)@',(new Date().getTime() - startTime.getTime()) / 1000);

// startTime = new Date();
console.time("num Object Get");
for (i = 0; i < MAX; i++) {
  obj[i];
}
console.timeEnd("num Object Get");
// console.log('Object num get running(s)@',(new Date().getTime() - startTime.getTime()) / 1000);

console.log();
let startTime2 = new Date();
const map2 = new Map();
const obj2 = {};

console.time("str Map Set");
for (let i = 0; i < MAX; i++) {
  map2.set(`name${i}`, `Participation number ${i}`);
}
console.timeEnd("str Map Set");
// console.log('Map str set running(s)@',(new Date().getTime() - startTime2.getTime()) / 1000);

// startTime2 = new Date();
console.time("str Object Set");
for (i = 0; i < MAX; i++) {
  obj2[`name${i}`] = `Participation number ${i}`;
}
console.timeEnd("str Object Set");
// console.log('Object str set running(s)@',(new Date().getTime() - startTime2.getTime()) / 1000);

// startTime2 = new Date();
console.time("str Map Get z");
for (i = 0; i < MAX; i++) {
  map2.get(`name${i}`);
}
console.timeEnd("str Map Get z");
// console.log('Map str get running(s)@',(new Date().getTime() - startTime2.getTime()) / 1000);

// startTime2 = new Date();
console.time("str Object Get z");
for (i = 0; i < MAX; i++) {
  obj2[`name${i}`];
}
console.timeEnd("str Object Get z");
// console.log('Object str get running(s)@',(new Date().getTime() - startTime2.getTime()) / 1000);

console.log('\n\n');
/////////////////////////////////////
startTime2 = new Date();
for (i = 0; i < MAX; i++) {
  map2.get(`name${i}`);
}
console.log('Map str get running(s)@',(new Date().getTime() - startTime2.getTime()) / 1000);

startTime2 = new Date();

for (i = 0; i < MAX; i++) {
  obj2[`name${i}`];
}

console.log('Object str get running(s)@',(new Date().getTime() - startTime2.getTime()) / 1000);
