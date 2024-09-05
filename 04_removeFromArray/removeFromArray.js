const removeFromArray = function (array, ...inputValues) {

    const newArray = [];
    array.forEach((item) => {
        if (!inputValues.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;

    // use forEach to go through the array
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    // and return that array



    // function checkValue(array, inputValue) {
    //     for (let i = 0; i < array.length; i++) {
    //         let value = array.at(i);
    //         if (value !== inputValue) {
    //             newArray.push(value);
    //         }
    //     }
    // }
    // return inputValues.forEach(checkValue(array, inputValues));





    // let newArray = [];
    // for (let i = 0; i < array.length; i++) { 
    //     let value = array.at(i);
    //     if (value !== inputValue) {
    //         newArray.push(value);
    //     }
    // }




    // let newArray = [];

    // for (let j = 0; j < inputValues.length; j++) {
    //     let inputValue = inputValues.at(j);
    //     for (let i = 0; i < array.length; i++) { 
    //         let value = array.at(i);
    //         if (value !== inputValue) {
    //             newArray.push(value);
    //         }
    //     }
    // }
    // return newArray;

    // let filtered = [];
    // function checkValue(inputValues, array) {
    //     for (let i = 0; i < array.length; i++) {
    //         let arrayValue = array.at(i);
    //         if (inputValues !== arrayValue) [
    //             filtered.push(arrayValue)
    //         ]
    //     }
    // }

    // return filtered;


    // const removeFromArray = function (array, inputValue) {




    // function checkValue(array, inputValues) {
    //     for (let i = 0; i < array.length; i++) {
    //         let value = array.at(i);
    //         if (value !== inputValues) {
    //             return true;
    //         }
    //         else {
    //             return false;
    //         }
    //     }
    // };

    // const filteredArray = array.filter(checkValue(array, inputValues));
    // return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;

