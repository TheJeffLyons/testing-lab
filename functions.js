function returnTwo() {
    console.log('2')
    return 2;
    
};

//returnTwo();

function greeting(name) {
    console.log(`Hello, ${name}.`)
    return `Hello, ${name}.`
};

//greeting("Jeff");

function add(num1, num2) {
    console.log(num1 + num2)
    return num1 + num2
}

//add(2, 2)

module.exports = {
    returnTwo,
    greeting,
    add
}