/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/


// Set the value of n
let n = 5; // You can replace this number with any value from 1 to 9

// Make the 'n' to the String and Concatenating

let nn = n + n;
let nnn = n + n + n;

//Make the Number from the String and count

let result = Number(n) + Number(nn) + Number(nnn);


// Result
console.log(`${n} + ${nn} + ${nnn} = ${result}`);
