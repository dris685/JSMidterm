function swapCase(str) {
    newStr = ""
    for(i = 0; i < str.length; i++){
        if(str.charAt(i) === str.charAt(i).toUpperCase()){
            newStr = newStr + str.charAt(i).toLowerCase()
        }else if(str.charAt(i) === str.charAt(i).toLowerCase()){
            newStr = newStr + str.charAt(i).toUpperCase()
        }else{
            newStr = newStr + str.charAt(i)
        }
    }
    return newStr
}

module.exports = { swapCase };
