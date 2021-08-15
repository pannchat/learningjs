var 사람 = {
    name:'손흥민',
    sayHi : function() {
        console.log(`안녕 나는 ${this.name}`)
    }
}

사람.sayHi();

var 자료 = {
    data : [1,2,3,4,5],
    // 전부더하기: function() {
    //     console.log(this.data.reduce((a,b)=> a+b ,0 ));
    // }
}
자료.전부더하기 = ()=>{
    console.log(this.data.reduce((a,b)=>a+b));
}
자료.전부더하기();

const x = x; 
const a = f(); 
const b = 2;
function f() {
  return b;
}