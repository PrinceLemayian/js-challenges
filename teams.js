/*
TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110.
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123.
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

/*
const dolphinsAverage = (96 + 108 + 89)/3;
const koalasAverage = (88 + 91 + 110)/3;

if (dolphinsAverage > koalasAverage) {
    console.log("Dolphins are the winners!")
} else if (koalasAverage > dolphinsAverage){
    console.log("Koalas are the winners!")
} else if (dolphinsAverage === koalasAverage) {
    console.log("The two teams draw!")
}
*/

/*
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
const minimumScore = 100;
console.log(scoreDolphins, scoreKoalas);

if ((scoreDolphins > scoreKoalas) && (scoreDolphins >= minimumScore)) {
    console.log("Dolphins win the trophy!");
} else if ((scoreKoalas > scoreDolphins) && (scoreKoalas >= minimumScore)) {
    console.log("Koalas win the trophy!");
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both teams win the trophy!")
}
*/

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
const minimumScore = 100;
console.log(scoreDolphins, scoreKoalas);

if ((scoreDolphins > scoreKoalas) && (scoreDolphins >= minimumScore)) {
    console.log("Dolphins win the trophy!");
} else if ((scoreKoalas > scoreDolphins) && (scoreKoalas >= minimumScore)) {
    console.log("Koalas win the trophy!");
} else if ((scoreDolphins === scoreKoalas) &&  (scoreDolphins >= minimumScore) && (scoreKoalas>=100)){
    console.log("Both teams win the trophy!");
} else {
    console.log("No one wins the trophy.");
}
