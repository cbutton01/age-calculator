class NumberOfSeconds {
  constructor() {
    this.seconds = 60;
    this.minutes = 1;
  }

  secondsToMinutes() {
    let totalSeconds = this.seconds * this.minutes;
    return totalSeconds;
  }

}

export { NumberOfSeconds }
