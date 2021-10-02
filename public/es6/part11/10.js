const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter{
    constructor(seconds, supersitious){
        super();
        this.seconds = seconds;
        this.superstitious = !!this.superstitious;
    }
    go(){
        const countdown = this;
        const timeoutIds = [];
        return new Promise(function(resolve, reject){
            for(let i =countdown.seconds;i>=0;i--){
                timeoutIds.push(setTimeout(function(){
                    if(countdown.superstitious && i === 13){
                        timeoutIds.forEach(clearTimeout);
                        return reject(new Error('Oh my god'))
                    }
                    countdown.emit('tick', i);
                    if(i===0) resolve();

                },(countdown.seconds-i)*1000));
            }
        })
        }
    }

    // const c = new Countdown(5);

    // c.on('tick',function(i){
    //     if(i>0) console.log(i+'...');
    // });
    // c.go()
    // .then(function(){
    //     console.log('Go!')
    // })
    // .catch(function(err){
    //     console.error(err.message);
    // })

    // const c = new Countdown(15, true)
    // .on('tick', function(i){
    //     if(i>0) console.log(i + '...');
    // });

    // c.go()
    // .then(function(){
    //     console.log('GO');
    // })
    // .catch(function(err){
    //     console.log(error(err.message))
    // })

function launch(){
        return new Promise(function(resolve, reject){
            console.log("Lift off!");
            setTimeout(function(){
                resolve('In orbit!');
    
            }, 2 * 1000)
        })
    }
    
const c = new Countdown(5)
.on('thick', i=> console.log(i + '...'));

c.go()
.then(launch)
.then(function(msg){
    console.log(msg)
})
.catch(function(err){
    console.log(error('houston, we have a problem...'));
})
    