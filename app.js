// import giditalClock plugin
const digitalClock = require('./digital-clock-v1.0.0');

// save the clock function
let theclock = digitalClock();

// get the time and date values
const theTime = theclock.time;
const theDay = theclock.date;

// update in interval of 1000ms. or 1sec.
setInterval(function(){
    console.log(theTime());
    console.log(theDay());
}, 1000);
