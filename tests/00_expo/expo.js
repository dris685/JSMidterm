// Do not use Math.pow() in your solution.
function expo(num1 = 1, num2 = 0) {
    if (num1 != 0){
        powerNum = num1 ** num2
    }else{
        powerNum = "num1 cannot be 0"
    }
    return powerNum
}

module.exports = { expo };
