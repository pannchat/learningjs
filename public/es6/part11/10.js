const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter{
    constructor(seconds, supersitious){
        super();
        this.seconds = seconds;
        this.superstitious = !!this.superstitious;
    }
    go(){
        const countdown = this;
        return new Promise(function(resolve, reject){
            for(let i =countdown.seconds;i>=0;i--){
                setTimeout(function(){
                    if(countdown.superstitious && i===13)
                    return reject(new Error('oh my god'));
                    countdown.emit('tick',i);
                    if(i===0) resolve();
                },(countdown.seconds-i)*1000);
            }
        })
        }
    }

    const c = new Countdown(5);

    c.on('tick',function(i){
        if(i>0) console.log(i+'...');
    });
    c.go()
    .then(function(){
        console.log('Go!')
    })
    .catch(function(err){
        console.error(err.message);
    })