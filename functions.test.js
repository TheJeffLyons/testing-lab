const { TestWatcher } = require('jest');

const {
    returnTwo,
    greeting,
    add
} = require('./functions.js');

test("return the number 2", () => {
    expect(returnTwo()).toEqual(2);
});

test("should return 'Hello, Name'", () => {
    expect(greeting("James")).toEqual("Hello, James.");
    expect(greeting("Jill")).toEqual("Hello, Jill.")
});

test("numbers should equal correctly", () => {
    expect(add(1, 2)).toEqual(3);
    expect(add(5, 9)).toEqual(14)
});


