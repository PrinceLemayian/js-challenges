
day = 0
result = ""

const printForecast = function(arr) {
    for (i = 0; i < arr.length; i++) {
        day += 1;
        result += `... ${arr[i]}°C in ${day} days `;
    }
}

printForecast([12, 5, -5, 0, 4]);
console.log(result)