// 1. Create an array named numbers and store 5 number values in it
let numbers = [8, 3, 4, 6, 5];

// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for(let number of numbers){
    sum += number;
}
console.log(sum);

// 3. Calculate the average of array items and print it to the console using console.log()
console.log(sum / numbers.length);

// 4. Find the highest number in the array and print it to the console using console.log()
let highestNumber = numbers[0];
for(let number of numbers){
    if (number > highestNumber) {
        highestNumber = number;
    }
}
console.log(highestNumber);
// 5. Find the lowest number in the array and print it to the console using console.log()
let lowestNumber = numbers[0];
for(let number of numbers){
    if (number < lowestNumber) {
        lowestNumber = number;
    }
}
console.log(lowestNumber);
// 6. Find the even numbers in the array and print them to the console using console.log()
console.log("Even Numbers");
for(let number of numbers){
    if(number % 2 === 0){
        console.log(number);
    }
}

// 7. Find the odd numbers in the array and print them to the console using console.log()
console.log("Odd Numbers");
for(let number of numbers){
    if(number % 2 !== 0){
        console.log(number);
    }
}

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
console.log("Divisible by 5");
for(let number of numbers){
    if(number % 5 === 0){
        console.log(number);
    }
}

// 9. Log all the element of the array one by one
console.log("All Elements");
for(let number of numbers){
    console.log(number);
}

// 10. Find all the number in the array that is divisible by 3
console.log("Divisible by 3");
for(let number of numbers){
    if(number % 3 === 0){
        console.log(number);
    }
}