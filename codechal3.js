//codewars encode a string with the method of using the Rail Fence Cipher. 
// This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails
function encodeRailFenceCipher(string, numberRails) {
    const letters = string.split("");
    const str= letters.length;
    const n = numberRails + (numberRails-2); //number of distance beetween letters in first and last rail
    let distance = n // is used to count the distance between letters in each rail
    let encoded = new Array (str);
    let j = 0;
    let k=0 //is used for index of encoded
    // fills the encoded array with all the letters but the last line
    // i represents the row and j the column if you think of the encoded string as a matrix of two dimentions
    for (let i=0; i<numberRails-1; i++){
      j=i;
      while (j< str){
          encoded[k] = letters[j];
          k = k+1;
          j = j+distance;
      }
      distance = distance - 2;
    }
    // fills the letters of last line 
    for (let i=numberRails-1; i<str;){
        encoded[k]=letters[i];
        if (k<str-1){
            k = k+1;
          }
        i = i+n;
    }
    return encoded.join("")
  }
  



// codewars challenge for finding the sum of n nunmber until is one digit
function digitalRoot(n) {
    // use modulo to take the last digit
    function breakToDigits(x){
        let sum = 0;
        while (x>0) {
          sum = sum + (x%10);
          x = (x-x%10)/10
          if (x<10){
            sum = sum + x;
            x=0}
        }
        return sum
      }
    let answer = breakToDigits(n);
    //another loop in case the sum of the digits is bigger than 9 a lot of times
    while (answer>9){
        answer = breakToDigits(answer)
    }
    return answer
  }
// better solutions:function digital_root(n) {
//   return (n - 1) % 9 + 1; //mathematical way
// {
//   if (n < 10) return n;
//   return digital_root(
//     n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
// } OR{
//   for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
//     sum += Number(n[i]);}

//codewars challenge find the ones in binary conversion of a number
//serching for number of ones in binary conversion
var countBits = function(n) {
    let numberOfOnes=0;
    //as long as n is smaller than one need to continue itterations
    while (n>=1){
      // existance of one is corellated with the remainder when dividing with 2
      if(!(n%2 === 0)){
        numberOfOnes +=1 ;
        n = (n/2)-0.5;
      } else {n=n/2}
    }
    return numberOfOnes
  };
  //n.toString(2) method converts n into a binary string.
  //CLEVER dry way!!!: countBits = n => n.toString(2).split('0').join('').length;

// Two teams and 3 games

const dolphins = [97, 112, 101];
const koalas = [109, 95, 106];

//find the average of each team
function average(array) {
    let sum = 0
    array.forEach((item) => {
            sum = sum + item;
    });
    return avg = sum / array.length;
}
const avgDolph = average(dolphins);
const avgKoal = average (koalas);

//check if they scored at least once 100 points
function findIf100 (array) {
    let max = array[0];
    array.forEach((item) =>{
        if (max < item) {
            max = item;
        };
    })
    let a = false;
    if (max >= 100) a = true;
    return a;
}

// find out if the score meaning the avg to be greater than 100
// avg >100

//find out who wins by comparing their average and if they passed the min of 100 points
if (avgDolph > avgKoal && findIf100(dolphins)){
    console.log ('The Dolphins win');
} else if (avgDolph < avgKoal && findIf100(koalas)) {
    console.log ('The Koalas win');
} else if (findIf100(koalas) && findIf100(dolphins)) {
    console.log ('We have a draw')
} else {
    console.log ('Nobody wins')
};


// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
