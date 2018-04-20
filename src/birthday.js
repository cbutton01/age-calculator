class Birthday {
  constructor() {
    this.secondsInMinute = 60;
    this.minutes = 1;
    this.minutesInHour = 60;
    this.hoursInDay = 24;
    this.lifeExpectancy = 80;
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
    let myAgeOnMercury = (Date.now() - onEarth)/1000 * mercuryReletivity;
    return myAgeOnMercury;
  }

  venusAge(year, month, day){
    let onEarth = new Date(year, month-1, day);
    let venusReletivity = .62;
    let myAgeOnVenus = (Date.now() - onEarth)/1000 * venusReletivity;
    return myAgeOnVenus;
  }

  marsAge(year, month, day){
    let onEarth = new Date(year, month-1, day);
    let marsReletivity = 1.88;
    let myAgeOnMars = (Date.now() - onEarth)/1000 * marsReletivity;
  }



}

export { Birthday };
