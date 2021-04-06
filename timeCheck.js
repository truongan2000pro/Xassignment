function validTime(a){
    const splitedTime = a.split(':')
    if(splitedTime[0]>24 || splitedTime[1]>59){
        return false
    }
        return true
}
console.log(validTime("24:40"))
console.log(validTime("25:40"))
console.log(validTime("24:60"))
