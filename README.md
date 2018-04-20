##### Independent Project April 20th, 2018 #####

## What it does in whole:

  * This app will demonstrate my knowledge of Behavior Driven Development, specifically using karma and jasmine to run tests.  I will need to use javaScript classes to define my functions and methods; this will ensure a clean workflow and enable me to implement a calculator that show's a person's age in seconds.

    * If I finish my main objectives early then I should build a working UI that a user may interact with.
    * That said, the purpose of this exercise is not to build a flashy or fancy UI, but rather to display my knowledge of running tests on my code.

## Plain English specs

  * Calculate the number of seconds in one minute:

    * The simplest form of this app should be able to return 60 seconds in one minute. For example "1 minute" will be translated into "60 seconds".


  * The calculator will then be able to return minutes per hour, and because seconds per minute is already defined it will also be able to return seconds per hour:

    * For example "1 hour" will translate into "60 minutes" which will then translate to "3,600 seconds".


  * After calculating seconds inside of an hour will come hours per day:

    * So "1 day" will become "24 hours"


  * Now all the arithmetic is in place to Calculate the number of seconds in one year:

    * "1 year" will return "365.25 days".  Because we already know the number of hours in 1 day and the number of minutes in 1 hour and the number of seconds in 1 minute, "1 year" will also equal "31,537,600 seconds".


  * Use the Date() object from javascript to receive a date to Calculate the number of seconds since that date:

    *  Date(1992, 03, 24) is April 24th 1992 and will return the value of 788,940,000.
