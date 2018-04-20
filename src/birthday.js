class Birthday {
  constructor() {
    this.seconds = 60;
    this.minutes = this.seconds/60;
    this.hours = this.minutes * 60;
  }

  secondsToMinutes() {
    let totalSeconds = this.seconds * this.minutes;
    return totalSeconds;
  }

  minutesToHours(){
    let totalSeconds = this.hours * this.minutes * this.seconds;
    return totalSeconds;
  }

  hoursInDay(){
    hoursInaDay = this.hours * 24;
    return hoursInaDay;
  }
}

export { Birthday }
