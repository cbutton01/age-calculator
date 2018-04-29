import { Birthday } from '../src/birthday.js';

describe('Birthday', function(){
  let seconds;
  let myBirthday;
  let myAge;
  let dateToTestWith;
  beforeEach(function(){
    dateToTestWith = new Date(2018, 3, 24);
    seconds = new Birthday();
    myBirthday = new Date (1992, 3, 24);
    myAge = (dateToTestWith - myBirthday) / 1000;
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
    console.log(totalSeconds);
  });

  it('should return a string with the appropriate date', function(){
    expect(myBirthday).not.toEqual('');
  });

  it('should return my age in seconds', function(){
    expect(myAge).not.toEqual(NaN);
    console.log(myAge);
  });

  it('should return my age in seconds on mercury', function(){
    let mercuryAge = seconds.mercuryAge(1992, 4, 24);
    expect(mercuryAge).not.toEqual(myAge);
  });
});
