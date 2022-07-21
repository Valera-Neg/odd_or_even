function oddOrEven(array) {

    const num =  array.reduce((a, b) => a+b, 0);
    return num % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([])) // => "even"
console.log(oddOrEven([0]))// => "even"
console.log(oddOrEven([0, 1, 4])) // => "odd"
console.log(oddOrEven([0, -1, -5])) // => "even"