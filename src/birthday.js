class Birthday {
  constructor() {
    this.seconds = 60;
    this.minutes = 1;
  }

  secondsToMinutes() {
    let totalSeconds = this.seconds * this.minutes;
    return totalSeconds;
  }

  minutesToHours(){
    let hours = this.minutes * 60;
    let totalSeconds = hours * this.minutes * this.seconds;
    return totalSeconds;
  }

}

export { NumberOfSeconds }
