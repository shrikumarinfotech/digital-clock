/**
 * Name: Digital Clock(HTML Prototype)
 * Description: Display Digital clock in JavaScript
 * Author: Shrikumar Infotech
 * Author URI: dev@shrikumarinfotech.com
 * License: GPLv2.0 or later
 * License URI: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

// use strict mode
'use strict';

// initiate digitalClock function
const digitalClock = function(){
    // define options
    // option time
    const optionsTime = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    }
    // option date
    const optionsDate = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    // option timezone
    const optionsTimeZone = {
        timeZoneName: 'long'
    };
    // option timezone short
    const optionsTimeZoneShort = {
        timeZoneName: 'short'
    };

    // return the clock object
    return {
        time: function(){
            return (new Intl.DateTimeFormat('en-US', optionsTime).format(new Date(Date.now())));
        },
        date: function(){
            return (new Intl.DateTimeFormat('en-US', optionsDate).format(new Date(Date.now())));
        },
        timezone: function(){
            return (new Intl.DateTimeFormat('en-US', optionsTimeZone).format(new Date(Date.now())));
        },
        timezoneshort: function(){
            return (new Intl.DateTimeFormat('en-US', optionsTimeZoneShort).format(new Date(Date.now())));
        }
    };
};

// define clock function
let theclock = digitalClock();

// get the time and date
const theTime = theclock.time;
const theDay = theclock.date;
const theTimeZone = theclock.timezone;
const timezoneShort = theclock.timezoneshort;

// get the display DOM elements
const displayTimeObject = document.getElementById('display-time');
const displayDateObject = document.getElementById('display-date');
const displayTimeZoneObject = document.getElementById('display-timezone');
const displayTimeZoneShortObject = document.getElementById('display-timezoneshort');

// display time
displayTimeZoneObject.innerHTML = theTimeZone();
displayTimeZoneShortObject.innerHTML = timezoneShort();
// clock update
setInterval(function(){
    displayTimeObject.innerHTML = theTime();
    displayDateObject.innerHTML = theDay();
}, 1000); // interval is 1second
