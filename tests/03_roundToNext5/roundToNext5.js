function roundToNext5(num) {
    roundNum = Math.round((num + 5) / 10) * 10
    return roundNum
}

module.exports = { roundToNext5 };
