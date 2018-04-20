class Birthday {
  constructor() {
    this.secondsInMinute = 60;
    this.minutes = 1;
    this.minutesInHour = 60;
    this.hoursInDay = 24;
  }

  secondsToMinutes() {
    let totalSeconds = this.secondsInMinute * this.minutes ;
    return totalSeconds;
  }

  minutesToHours(){
    let totalSeconds = this.minutesInHour * this.secondsInMinute;
    return totalSeconds;
  }

  findBirthday(year, month, day){
    let myBirthday = new Date(year, month-1, day);
    return '' + myBirthday;
  }

}

export { Birthday };
