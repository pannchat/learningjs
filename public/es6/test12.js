class Log{
        constructor(){
            this.messages = [];
        }
        add(message){
            this.messages.push({ message, timestamp: Date.now() });
        }
        [Symbol.iterator](){
            let i = 0;
            const messages = this.messages;
            return{
                next(){
                    if(i >= messages.length)
                        return { value : undefined, done : true};
                    return { values: messages[i++], done: false}
                }
            }
        }
}