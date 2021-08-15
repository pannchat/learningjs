// console.log(this);
// (function 함수() {
//     console.log(this);
// })();

var obj ={

    name : ['김','이','박'],
    // func : function(){
    func : function() {
        console.log(this)
        obj.name.forEach(function(){
            console.log(this);
        });

    }
    
}
obj.func();

// function maker(){
//     this.name = "test";
// }

// var test = new maker();
// console.log(test)

