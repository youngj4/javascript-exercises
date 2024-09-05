const removeFromArray = function (array, inputValue) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let value = array.at(i);
        if (value !== inputValue) {
            newArray.push(value);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
