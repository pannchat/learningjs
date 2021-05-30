function countdown(seconds){
    return new Promise(function(resolve, reject){
        for(let i = seconds; i>=0; i--){
            setTimeout(function(){
                if(i===13) return reject(new Error("Oh my god"));
                if(i>0) console.log(i+'...');
                else resolve(console.log("go"));
            }, (seconds-i)*1000);
        }
    });
}

countdown(13)