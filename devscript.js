"use strict";

//coding challenge dev 1
//Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."

const printForecast = function (tempArr) {
  let tempDays = [];

  //maybe is better with an empty string  for less space than an array
  for (let i = 0; i < tempArr.length; i++) {
    tempDays[i] = `... ${tempArr[i]}ºC in ${i + 1} days `;
  }
  console.log(`${tempDays.join("")} ...`);
};

const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];
console.log(printForecast(test1));
console.log(printForecast(test2));

// find the temprature amplitude in a set of tempratures in one day. attention for errors in temp
//amplitude is Tmax - Tmin
// const temperatures = [4, 9, 2, 10, -3, -5, "error", 5, "404"];

// const calcAmplitude = function (arrTemp) {
//   let max = -10000;
//   let min = 1000000;

//   for (let i = 0; i < arrTemp.length; i++) {
//     // create a variable not search 5 times in the array
//     const temp = arrTemp[i];

//     //check if there is an error and go to next iteration
//     if (typeof temp !== "number") continue;
//     if (temp > max) max = temp;
//     if (temp < min) min = temp;
//   }
//   return max - min;
// };

// const amplitude = calcAmplitude(temperatures);
// console.log(amplitude);
