const sumAll = function (valueA, valueB) {
    let sum = 0;
    function checkInteger(valueA, valueB) {
        if (Number.isInteger(valueA) && Number.isInteger(valueB)) {
            return true;
        }
        else {
            return false;
        }
    }
    function checkTypes(valueA, valueB) {
        if (typeof valueA === "number" && typeof valueB === "number") {
            return true;
        }
        else {
            return false;
        }
    }

    if (valueA > valueB) {
        max = valueA;
        min = valueB;
    }
    else {
        max = valueB;
        min = valueA;
    }
    let i = max;
    switch (checkInteger(max, min)) {
        case true:
            switch (checkTypes(max, min)) {
                case false:
                    return "ERROR";
                case true:
                    while (i >= min) {
                        sum += i;
                        i--;
                    }
                    if (sum >= 0) {
                        return sum;
                    }
                    else {
                        return "ERROR";
                    }
            }
        case false:
            return "ERROR";
    }


};

// Do not edit below this line
module.exports = sumAll;
