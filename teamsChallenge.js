'use strict';

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3)/3;
}

const dolphinsScore = calcAverage(85, 54, 41);
const koalasScore = calcAverage(23, 34, 27);

const checkWinner = (dolphinsScore, koalasScore) => {
    if (dolphinsScore >= (koalasScore*2)) {
        console.log(`Dolphins win (${dolphinsScore} vs. ${koalasScore})`);
    } else if (koalasScore >= (dolphinsScore*2)) {
        console.log(`Koalas win (${koalasScore} vs. ${dolphinsScore})`);
    } else {
        console.log("No team wins")
    }
}

console.log(dolphinsScore, koalasScore)
console.log(checkWinner(dolphinsScore, koalasScore));