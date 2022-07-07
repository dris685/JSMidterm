function findShortestWord(str) {
    strArray = []
    strArray.push(str.split(" "))
    newStrArray = strArray.flat()
    minStr = newStrArray[0]
    for(i = 0; i < newStrArray.length; i++){
        if(newStrArray[i].length <= minStr.length){
            minStr = newStrArray[i]
        }
    }
    return minStr
}

module.exports = { findShortestWord };
