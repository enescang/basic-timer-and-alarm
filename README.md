# Basic Timer and Alarm

Basic Timer and Alarm is allows you to display difference now and a time that you entered as a parameter.

# Usage
Call the Timer.js in your html file.
```html
 <script src="Timer.js" type="text/javascript"></script>
```
## Timer 

Call Timer class from Timer.js
```js
 var Timer = new Timer();
```
then set a date which must be greater than now
```js
 Timer.setFutureTime("2020 04 11 14:35:00");
```
Call this function to show differences in your html element (id="timer")
```js
 Timer.displayDiff();
```
Write the function to be called when time is over
```js
   Timer.thenDo = function () {
        alert("it is time to show something");
      };
```

Full Example:
```js
var Timer = new Timer();
    Timer.setFutureTime("2020 04 11 14:35:00");
    Timer.displayDiff();
    Timer.thenDo = function () {
      alert("it is time to show something");
    };
```

## Alarm 
Call Alarm class 
```js
var alarm = new Alarm();
```
Add minutes or seconds
```js
 alarm.addMinutes(20);
 alarm.addSeconds(10);
```
Start your alarm
```js 
 alarm.start();
```

Write a function when to be called time is up
```js
alarm.thenDo = function () {
        alert("Time is up!")
      };
```

Full Example
```js
var alarm = new Alarm();
      alarm.addMinutes(20);
      alarm.addSeconds(10);
      alarm.start();
      alarm.thenDo = function () {
        alert("Time is up!")
      };
```

[kodlib.com](https://kodlib.com)