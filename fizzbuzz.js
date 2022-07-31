// check numbers from 1 to 100 and see if they are devisable with 3,5 or both
//FIZZBUZZ CHAL! 
// for (let i=1; i <= 100; i++) {
// // put first 15 cause the code will stop in diferent order
//     if (i%15 === 0){
//         console.log ('fizzbuzz');
//     } else if (i%3 ===0) {
//         console.log ('fizz')
//     } else if ( i%5 ===0) {
//         console.log ('buzz')
//     } else {
//         console.log(i)
//     }
// };





//  codechallenge 4
//tip calculator acording to bill

const bill = Number(prompt('how much will you pay?'));
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
alert(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill+tip}`);