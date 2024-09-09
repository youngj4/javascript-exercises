const leapYears = function (year) {
    //If the year is divisible by four, it's a leap year.
    //But if the year can be divided by 100 as well as four, it's not a leap year.
    //However, if the year is divisible by 400, it is a leap year.

    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return true;
    }

    else if (year % 4 === 0 && year % 100 === 0) {
        return false
    }

    else if (year % 4 === 0) {
        return true
    }
    else {
        return false
    }








    // if (year % 100 === 0 && year % 400 === 0) {
    //     return true;
    // }


    // else if (year % 4 === 0) {
    //     return true;
    // }
    // else {
    //     return false;
    // }

};

// Do not edit below this line
module.exports = leapYears;
