function betterThanAverage(scoreArray = [], score) {
    scoreTotal = 0
    for(i = 0; i < scoreArray.length; i++){
        scoreTotal = scoreTotal + scoreArray[i]
    }

    scoreAverage = Math.round(scoreTotal / scoreArray.length)
    if(score > scoreAverage){
       return `your score ${score} is greater than class average ${scoreAverage}`
    }else if(score < scoreAverage){
        return `your score ${score} is lower than class average ${scoreAverage}`
    }else{
        return `your score ${score} is equal to class average ${scoreAverage}`
    }
}

module.exports = { betterThanAverage };
