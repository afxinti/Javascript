'use strict'; 
//codewars encode a string with the method of using the Rail Fence Cipher. 
// // This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails
// function encodeRailFenceCipher(string, numberRails) {
//   if (numberRails ===1){
//     return string
//   }
//   const letters = string.split("");
//   const str= letters.length;
//   let encoded = new Array (str);
//   let j = 0;
//   let k=0 //is used for index of encoded
//   // i represents the row and j the column if the encoded string is a matrix of two dimentions
//   for (let i=0; i<numberRails; i++){
//     j=i;
//     let l=1;
//     while (j< str){
//         encoded[k] = letters[j];
//         if (k<str-1){
//           k = k+1;
//         }
//         if (i=== 0 || i === numberRails-1){
//           j = j +(numberRails-1)*2; //distance beetween letters in first and last rail
//         } else {
//           // l binary determines if you're down or up
//           if (l=1){
//             j = j + (numberRails-i-1)*2; // down defferent distance
//             l= 0
//           }else {
//             j = j + i*2;
//             l= 1
//           }
//         }
//     }
//   }
  
//   return encoded.join("")
// }

// // to decode we need to take each letter of the string and put it in correct order
// // for first letters the i+n, then i+n-2 
// function decodeRailFenceCipher(string, numberRails) {
//   if (numberRails ===1){
//     return string
//   }
//   const letters = string.split("");
//   const str = letters.length;
//   let decoded = new Array(str);
//   let counter = 0;
//   let j = 0;
//   //loops through letters and sets the corect order in decoded
//   for (let i= 0; i<numberRails; i++){
//     j=i;
//     let l=1;
//     while (j<str){
//       decoded [j] = letters[counter];
//       if (counter< str-1){
//       counter = counter +1;
//         }
//       if (i=== 0 || i === numberRails-1){
//           j = j +(numberRails-1)*2; //distance beetween letters in first and last rail
//         } else {
//           // l binary determines if you're down or up
//           if (l=1){
//             j = j + (numberRails-i-1)*2; // down defferent distance
//             l= 0
//           }else {
//             j = j + i*2;
//             l= 1
//           }
//         }
//       } 
//     }

//   return decoded.join("")
// }
  



// // codewars challenge for finding the sum of n nunmber until is one digit
// function digitalRoot(n) {
//     // use modulo to take the last digit
//     function breakToDigits(x){
//         let sum = 0;
//         while (x>0) {
//           sum = sum + (x%10);
//           x = (x-x%10)/10
//           if (x<10){
//             sum = sum + x;
//             x=0}
//         }
//         return sum
//       }
//     let answer = breakToDigits(n);
//     //another loop in case the sum of the digits is bigger than 9 a lot of times
//     while (answer>9){
//         answer = breakToDigits(answer)
//     }
//     return answer
//   }
// // better solutions:function digital_root(n) {
// //   return (n - 1) % 9 + 1; //mathematical way
// // {
// //   if (n < 10) return n;
// //   return digital_root(
// //     n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
// // } OR{
// //   for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
// //     sum += Number(n[i]);}

// //codewars challenge find the ones in binary conversion of a number
// //serching for number of ones in binary conversion
// var countBits = function(n) {
//     let numberOfOnes=0;
//     //as long as n is smaller than one need to continue itterations
//     while (n>=1){
//       // existance of one is corellated with the remainder when dividing with 2
//       if(!(n%2 === 0)){
//         numberOfOnes +=1 ;
//         n = (n/2)-0.5;
//       } else {n=n/2}
//     }
//     return numberOfOnes
//   };
  //n.toString(2) method converts n into a binary string.
  //CLEVER dry way!!!: countBits = n => n.toString(2).split('0').join('').length;

// Two teams and 3 games

// const dolphins = [97, 112, 101];
// const koalas = [109, 95, 106];

// //find the average of each team
// function average(array) {
//     let sum = 0
//     array.forEach((item) => {
//             sum = sum + item;
//     });
//     return avg = sum / array.length;
// }
// const avgDolph = average(dolphins);
// const avgKoal = average (koalas);

// //check if they scored at least once 100 points
// function findIf100 (array) {
//     let max = array[0];
//     array.forEach((item) =>{
//         if (max < item) {
//             max = item;
//         };
//     })
//     let a = false;
//     if (max >= 100) a = true;
//     return a;
// }
//codechal 3 fund-par2 
//Mark and John comparing their BMIs For each create an object with name, mass,height (Mark Miller and John Smith) and method calcBMI,
//check who's BMI is greater

// const  mark = {
//   fullName: 'Mark Miller',
//   mass: 78 ,
//   height: 1.69,
//   calcBMI: function (){
//     this.bmi = this.mass / this.height**2;
//     return this.bmi;
//   }
// }
// const  john = {
//   fullName: 'John Smith',
//   mass: 92 ,
//   height: 1.95,
//   calcBMI: function (){
//     this.bmi = this.mass / this.height**2;
//     return this.bmi;
//   }
// }
// const a = mark.calcBMI() > john.calcBMI() ? mark : john;
// const b = a === mark? john : mark;
// console.log (`${a.fullName}'s  BMI (${a.bmi} is heigher than ${b.fullName}'s BMI (${b.bmi}))`)

// //exercise 5
// const xinti = {
//   firstName: 'Afro',
//   lastName: 'Xinti',
//   birthYear: 1992,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,
//   data: function (){ 
//     return `${this.firstName} is ${2022-this.birthYear} and has ${this.hasDriversLicense ? 'a':'no'} driver's licence;`
//   }
// }
// console.log (xinti.data())
// coding challenge 4- fund part2  Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
//create array bills with 125,555 and.. , create a tip array calculating the tips. bonus: create a function to calc average of an array

const calcTip = function  (bill) {
  return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2}
 // other way
//   if (bill > 50 && bill < 300 ) {
//     return bill * 0.15
//   } else {
//     return bill * 0.2
//   }
// }
let tips = [];
let total = [];
const bills = [125, 555, 44,22, 295, 440, 1100, 30];
for (let i=0; i< bills.length; i++){
  tips.push(calcTip(bills[i]))
  total[i]= bills[i]+tips[i]
}
console.log (tips, total)
 
function calcArrayAvg (ar){
  let sum = 0;
  for (let i=0; i< ar.length; i++){
    sum = sum + ar[i];
    //sum += ar[i]; ALSO THIS
  }
  return sum/(ar.length)
}


// // exercise: 2 teams compete 3 times A team only wins if it has at least double the average score
// const avgScore = (sc1,sc2,sc3) => (sc1 + sc2 + sc3)/3;
// const scDolphines = avgScore(85,54,41);
// const scKoalas = avgScore(23,24,17);
// const checkWinner = function (avgDolphines,avgKoalas) {
//   console.log (avgDolphines,avgKoalas)
//   if (avgKoalas >= avgDolphines*2){
//     return `Koalas win (${avgKoalas}vs ${avgDolphines})`
//   } else if (avgDolphines >= avgKoalas*2) {
//     return `Dolphins win (${avgDolphines}vs ${avgKoalas})`
//   }
//   else {
//     return `No one wins`
//   }
// }

// console.log (checkWinner(scDolphines,scKoalas));

// find out if the score meaning the avg to be greater than 100
// avg >100

//find out who wins by comparing their average and if they passed the min of 100 points
// if (avgDolph > avgKoal && findIf100(dolphins)){
//     console.log ('The Dolphins win');
// } else if (avgDolph < avgKoal && findIf100(koalas)) {
//     console.log ('The Koalas win');
// } else if (findIf100(koalas) && findIf100(dolphins)) {
//     console.log ('We have a draw')
// } else {
//     console.log ('Nobody wins')
// };


// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
