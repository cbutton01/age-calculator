import { Birthday } from '../src/birthday.js';

describe('NumberOfSeconds', function(){
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
    let secondsInMinute = seconds.secondsToMinutes();
    expect(secondsInMinute).toEqual(300);
  });

  it('should return 3,600 seconds in one hour', function (){
    let secondsInAnHour = seconds.minutesToHours();
    expect(secondsInAnHour).toEqual(3600);
  });

  it('should show 24 hours in one day', function(){
    let hoursInADay = seconds.hoursInDay();
    expect(hoursInADay).toEqual(24);
  });

});
