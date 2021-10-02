export function launch(){
    return new Promise(function(resolve, reject){
        console.log("Lift off!");
        setTimeout(function(){
            resolve('In orbit!');

        }, 2 * 1000)
    })
}

