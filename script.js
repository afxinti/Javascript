//OPERATORS

//Assignments operations
let x= 2**3; // 2 sti 3i ara 2*2*2 =8
x += 10; // auto einai x=x + 10
x *= 5; // dld x = x * 5
x++; // x+1
x--; //x-1

// to write big string with var and other stuff use backstick `` above tab

//coding challenge 1

//testdata1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

/*testdata2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;*/

//calculate BMIs and compare them
const markBMI = massMark/ heightMark**2;
const johnBMI = massJohn / heightJohn**2;
const markHigherBMI = markBMI > johnBMI;
console.log (markBMI,johnBMI,markHigherBMI); 

//coding challenge 2
 if (markHigherBMI) {
  console.log(`Mark's BMI(${markBMI} is higher than John's (${johnBMI}!)`);  
 }else {
  console.log(`John's BMI(${johnBMI} is higher than Mark's (${markBMI}!)`);  
 };