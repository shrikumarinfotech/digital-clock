/**
 * Name: Digital Clock
 * Description: Display Digital clock in JavaScript
 * Author: Shrikumar Infotech
 * Author URI: dev@shrikumarinfotech.com
 * License: GPLv2.0 or later
 * License URI: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

'use strict';

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

    
    return {
        time: function(){
            return (new Intl.DateTimeFormat('en-US', optionsTime).format(new Date(Date.now())));
        },
        date: function(){
            return (new Intl.DateTimeFormat('en-US', optionsDate).format(new Date(Date.now())));
        }
    };

    // return (new Intl.DateTimeFormat('en-US', optionsTime).format(datetime));

};

module.exports = digitalClock;