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
