// let obj = {},
//   map = new Map(),
//   n = 5000000,
//   arr = [];
// for (let i = 0; i < n; i++) {
//   obj[i] = i;
//   map.set(i,i);
//   arr[i] = i;
// }
// console.time("number Object set");
// for (let i = 0; i < n; i++) {
//   obj[i] = i;
// }
// console.timeEnd("number Object set");

// console.time("number Map set");
// for (let i = 0; i < n; i++) {
//   map[i] = i;
// }
// console.timeEnd("number Map set");

// console.time("number Array set");
// for (let i = 0; i < n; i++) {
//   arr[i] = i;
// }
// console.timeEnd("number Array set");

// console.log("\n\n");

// console.time("string Object set");
// for (let i = 0; i < n; i++) {
//   obj[`num ${i}`] = `${i}`;
// }
// console.timeEnd("string Object set");

// console.time("string Map set");
// for (let i = 0; i < n; i++) {
//   map[`num ${i}`] = `${i}`;
// }
// console.timeEnd("string Map set");

// console.time("string Array set");
// for (let i = 0; i < n; i++) {
//   arr[`num ${i}`] = `${i}`;
// }
// console.timeEnd("string Array set");

// console.log("\n\n");
let obj = {},
  map = new Map(),
  n = 5000000,
  arr = [];
for (let i = 0; i < n; i++) {
  obj[i] = i;
  map.set(i,i);
  arr[i] = i;
}

// find
console.time("Object find");
result = obj.hasOwnProperty('num 999999');
console.timeEnd("Object find");

console.time("Map find");
result = map.has('num 999999');
console.timeEnd("Map find");

console.time("Array find");
result = map.has('num 999999');
console.timeEnd("Array find");

console.log("\n\n");

// set num
console.time("Object Set");
for(i=0; i<1; i++)
    obj[1] = 1;
console.timeEnd("Object Set");

console.time("Map Set");
for(i=0; i<1; i++)
map.set(1, 1);

console.timeEnd("Map Set");

console.time("Array Set");
for(i=0; i<1; i++)
arr[1] = 1;

console.timeEnd("Array Set");

console.log("\n\n");
//get
console.time("Object Get");
obj[1];
console.timeEnd("Object Get");

console.time("Map Get");

map.get(1);

console.timeEnd("Map Get");

console.time("Array Get");

arr[1];

console.timeEnd("Array Get");
