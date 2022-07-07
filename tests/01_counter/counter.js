function counter(num) {
    counterArray = []
    for(i = 1; i <= num; i++){
        counterArray.push(i)
    }
    return counterArray
}

module.exports = { counter };
