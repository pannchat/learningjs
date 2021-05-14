function sum(arr, f){
    //함수가 전달되지 않았으면 매개변수를 그대로 반환하는 null함수를 쓴다.
    if(typeof f != 'function') f = x => x;
    return arr.reduce((a,x) => a+= f(x), 0);
}
console.log(sum([1,2,3]));   //6
console.log(sum([1,2,3], x=> x*x));  //14
console.log(sum([1,2,3], x=> Math.pow(x, 3)));   //36

// function sumOfSuquares(arr){
//     return sum(arr, x=> x*x);
// }

function newSummer(f){
    return arr => sum(arr,f);
}

const sumOfSuquares = newSummer(x=>x*x);
const sumOfCubes = newSummer(x => Math.pow(x,3));
console.log(sumOfSuquares([1,2,3]));
console.log(sumOfCubes([1,2,3]))