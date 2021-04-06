function missingNum(arr){
  if(arr.includes(arr.length)){
    let check = 0
    for(let i =0 ; i < arr.length ; i ++){
      if(!arr.includes(arr.length-arr[i])){
        return arr.length-arr[i]
      }
  
    }
  }
  else{ 
    return arr.length
  }

}
console.log(missingNum([0,1,2]))
console.log(missingNum([3,1,0])) 
