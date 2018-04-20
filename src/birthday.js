class Birthday {
  constructor(year, month, day) {
    this.secondsInMinute = 60;
    this.minutes = 1;
    this.minutesInHour = 60;
    this.hoursInDay = 24;
    this.lifeExpectancy = 80;
    this.year = year;
    this.month = month-1;
    this.day = day;
  }

  secondsToMinutes() {
    let totalSeconds = this.secondsInMinute * this.minutes ;
    return totalSeconds;
  }

  minutesToHours(){
    let totalSeconds = this.minutesInHour * this.secondsInMinute;
    return totalSeconds;
  }

  findBirthday(){
    let myBirthday = new Date(this.year, this.month, this.day);
    return myBirthday;
  }

  earthAge(){
    let age = new Date(this.year, this.month, this.day);
    let myAge = (Date.now() - age)/1000;
    return myAge;
  }

  mercuryAge(){
    let onEarth = new Date(this.year, this.month, this.day);
    let mercuryReletivity = .28;
    let myAgeOnMercury = (Date.now() - onEarth)/1000 * mercuryReletivity;
    return myAgeOnMercury;
  }

  venusAge(){
    let onEarth = new Date(this.year, this.month, this.day);
    let venusReletivity = .62;
    let myAgeOnVenus = (Date.now() - onEarth)/1000 * venusReletivity;
    return myAgeOnVenus;
  }

  marsAge(){
    let onEarth = new Date(this.year, this.month, this.day);
    let marsReletivity = 1.88;
    let myAgeOnMars = (Date.now() - onEarth)/1000 * marsReletivity;
    return myAgeOnMars;
  }

  jupiterAge(){
    let onEarth = new Date(this.year, this.month, this.day);
    let jupiterReletivity = 11.86;
    let myAgeOnJupiter = (Date.now() - onEarth)/1000 * jupiterReletivity;
    return myAgeOnJupiter;
  }

  ageInYears(){
    let age = new Date(this.year, this.month, this.day);
    let myAge = (Date.now() - age)/1000/60/60/24/365.25;
    return myAge;
  }

  timeLeft(){
    let age = new Date(this.year, this.month, this.day);
    let myAge = (Date.now() - age)/1000/60/60/24/365.25;
    return this.lifeExpectancy - myAge;
  }
}

export { Birthday };
