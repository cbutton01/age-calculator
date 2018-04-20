import { NumberOfSeconds } from '../src/birthday.js';

describe('NumberOfSeconds', function(){
  let seconds;
  beforeEach(function(){
    seconds = new NumberOfSeconds();
    console.log(NumberOfSeconds);
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

});
