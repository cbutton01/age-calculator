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
    return myBirthday;
  }

  mercuryAge(year, month, day){
    let onEarth = new Date(year, month-1, day);
    let mercuryReletivity = .28;
    let myAgeOnMercury = (Date.now() - onEarth)/1000 * .28;
    return myAgeOnMercury;
  }

}

export { Birthday };
