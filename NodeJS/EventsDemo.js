const EventEmmiter = require('events');

class myEvent extends EventEmmiter{
    startTicks(){
        setInterval(()=>{
            this.emit('tick');
        },1000);

        setInterval(()=>{
            this.emit('vatsal');
        },5000);
    }
}

const obj = new myEvent();

obj.startTicks();

obj.on('tick',()=>{
    console.log("Got tick message.");
});

obj.on('vatsal',()=>{
    console.log("Got vatsal message.");
});