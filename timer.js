class Timer {
  futureTime = "";
  now = "";
  difference = "";
  domElement = "";
  years = "";
  thenDo = function (callback) {
    callback();
  };

  constructor(time) {
    this.time = time;
    this.domElement = document.getElementById("timer");
  }

  setFutureTime(time) {
    this.futureTime = this.toTimestamp(time);
  }

  setNow(time) {
    this.now = this.toTimestamp(time);
  }

  toTimestamp(strDate) {
    var date = new Date(strDate).getTime();
    return date;
  }

  diff_days() {
    var diff = this.futureTime - this.now;
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    this.years = days / 365;

    if (days < 365) {
      return days;
    }

    do {
      days = days - 365;
    } while (days > 365);

    return days;
  }

  diff_hours() {
    var diff = this.futureTime - this.now;
    return Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }

  diff_minutes() {
    var diff = this.futureTime - this.now;
    return Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  }

  diff_second() {
    var diff = this.futureTime - this.now;
    return Math.floor((diff % (1000 * 60)) / 1000);
  }

  displayDiff() {
    if (this.futureTime < new Date().valueOf()) {
      this.domElement.innerHTML = "Set date which is later then now";
    } else {
      var interval = setInterval(() => {
        this.setNow(new Date());
        if (this.futureTime <= this.now) {
          console.log("You reached the time");
          this.thenDo();
          clearInterval(interval);
          return true;
        }
        
        this.domElement.innerHTML =
          Math.abs(Math.floor(this.years)) +
          "years <br>" +
          Math.abs(this.diff_days()) +
          "days <br>" +
          Math.abs(this.diff_hours()) +
          " hours <br>" +
          Math.abs(this.diff_minutes()) +
          "minutes <br>" +
          Math.abs(this.diff_second()) +
          "seconds";
      }, 1000);
    }
  }
}

class Alarm {
  minutes = "";
  second = "";
  domElement = "";
  thenDo = function (callback) {
    callback();
  };

  constructor() {
    this.domElement = document.getElementById("alarm");
  }

  addMinutes(min) {
    this.minutes = min * 60; //convert to second
  }

  addSeconds(sec) {
    this.second = sec;
  }

  start() {
    var totalSecond = this.minutes + this.second;

    if (totalSecond <= 0) {
      this.domElement.innerHTML = "Total second must greater than 0";
      return false;
    }

    var run = setInterval(() => {
      if (totalSecond <= 0) {
        this.thenDo();
        console.log("time is up");
        clearInterval(run);
      }

      this.domElement.innerHTML = totalSecond;
      totalSecond--;
    }, 1000);
  }
}
