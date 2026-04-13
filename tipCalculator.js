function calcTip(value) {
    if (value > 50 && value < 300) {
        tip = value * 0.15
    } else {
        tip = value * 0.2
    }

    return tip
}

console.log(calcTip(1000))

bills = [125, 555, 44]
console.log(bills);

