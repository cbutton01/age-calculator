import { Birthday } from '../src/birthday.js';

describe('Birthday', function(){
  let seconds;
  beforeEach(function(){
    seconds = new Birthday();
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
    expect(seconds.findBirthday(1992, 04, 24)).toEqual('Fri Apr 24 1992 00:00:00 GMT-0700 (Pacific Daylight Time)');
    console.log(seconds.findBirthday(1992, 04, 24));
  });

});
