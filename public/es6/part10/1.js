// setTimeout(function() {console.log("hello");}, 1500);
// var i;
// for(i=5; i>=0; i--){
//     setTimeout(function(){
//         console.log(i===0? "go!":i);
//     }, (5-i)*1000);
// }

for(let i=5; i>=0; i--){
    setTimeout(function(){
        console.log(i===0? "go!":i);
    }, (5-i)*1000);
}