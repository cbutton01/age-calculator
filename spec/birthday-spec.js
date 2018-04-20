

describe('NumberOfSeconds', function(){
  let minutes;
  let seconds;
  beforeEach(function(){
    minutes = 1;
    seconds = 60;
    console.log(minutes, seconds);
  });
  it('should return 60 seconds', function(){
    let secondsInMinute = seconds * minutes;
    expect(secondsInMinute).not.toEqual(60);
  });
});
