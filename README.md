# Clock Plugin for npm and HTML use
This is a clock plugin made with JavaScript that displays clock in your local time zone.

# Usage

## npm usage
Install package with `npm install --save digital-clock`
(Note: npm package has not published yet, you can download and use it manually till we upload it into npm library.)

```
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
```
## HTML Script tag usage

Use this before your HTML file `</body>` tag:
```
<script src="digital-clock-v1.0.0-proto.js"></script>
```

Following elements must be there in your HTML body:
```
<div class="digital-clock-wrapper">
    <div id="digital-clock">
        <div id="display-time"></div>
        <div id="display-date"></div>
        <div id="display-timezone"></div>
        <div id="display-timezoneshort"></div>
    </div>
</div>
```

Include this CSS file in your HTML `<head></head>`:
```
<link rel="stylesheet" href="./includes/stylesheets/digital-clocl-v1.0.0.css">
```

Sample HTML file:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Clock</title>
    <link rel="stylesheet" href="./includes/stylesheets/digital-clocl-v1.0.0.css">
</head>
<body>
    <div class="digital-clock-wrapper">
        <div id="digital-clock">
            <div id="display-time"></div>
            <div id="display-date"></div>
            <div id="display-timezone"></div>
            <div id="display-timezoneshort"></div>
        </div>
    </div>
    

    <script src="digital-clock-v1.0.0-proto.js"></script>
</body>
</html>
```

# Live URL
```
https://shrikumarinfotech.github.io/digital-clock/
```