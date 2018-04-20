import { Birthday } from '../src/birthday.js';

describe('Birthday', function(){
  let seconds;
  let myBirthday;
  let myAge;
  beforeEach(function(){
    seconds = new Birthday();
    myBirthday = seconds.findBirthday(1992, 4, 24);
    myAge = (Date.now() - myBirthday) / 1000;
  });
  it('should return 60 seconds', function(){
    let secondsInMinute = seconds.secondsToMinutes();
    expect(secondsInMinute).toEqual(60);
  });
  it('should return 300 seconds', function (){
    seconds.minutes *= 5;
    expect(seconds.secondsToMinutes()).toEqual(300);
  });

  it('should return 3,600 seconds in one hour', function (){
    expect(seconds.minutesToHours()).toEqual(3600);
  });

  it('should return 24 hours in one day', function(){
    let hoursInADay = seconds.hoursInDay;
    expect(hoursInADay).toEqual(24);
  });

  it('should return total number of seconds in a day', function(){
    let totalSeconds = seconds.hoursInDay * seconds.minutesToHours();
    expect(totalSeconds).toEqual(86400);
  });

  it('should return a string with the appropriate date', function(){
    expect(myBirthday).not.toEqual('');
    console.log('' + myBirthday);
  });

  it('should return my age in seconds', function(){
    expect(myAge).not.toEqual(NaN);
    console.log(myAge);
  });

  it('should return my age in seconds on mercury', function(){
    let mercuryAge = myAge * .24;
    expect(mercuryAge).not.toEqual(myAge);
    console.log(mercuryAge);
    console.log(myAge);
  });
});
