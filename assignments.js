//excercise 1
const country = "Greece";
const continent = "Europe";
let population = 11;
console.log(country,continent,population); 

//excercise 2
const isIsland = false;
const language = "greek"
console.log(typeof isIsland);

//excercise 3
const halfPopulation = population/2;
population ++;
console.log('we found one extra milion: ',population);
console.log(population > 6);
console.log(population < 33); 
let description = 
    country +
    " is in " + continent + 
    ", and its " + population + 
    " million people speak " + language;
console.log (halfPopulation, description);