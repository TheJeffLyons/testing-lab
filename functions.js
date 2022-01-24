function returnTwo() {
   
    return 2;
    
};

//returnTwo();

function greeting(name) {
 
    return `Hello, ${name}.`
};

//greeting("Jeff");

function add(num1, num2) {
 
    return num1 + num2
}

//add(2, 2)

module.exports = {
    returnTwo,
    greeting,
    add
}