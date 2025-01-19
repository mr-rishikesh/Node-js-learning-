function divide(num1 , num2) {
  return new Promise((resolve , reject) => {
     if(num2 == 0) {
        reject("we cant divide any num by 0")
    }
    else {
        resolve(num1/num2)

    }
  }) 
}
// we can use .then multiple time after returning and the catch for the error
divide(10 , 1).then((res) => {
    console.log(res)
    return res/10;
}).then((res) => {
    console.log(res)
     
}).catch((err) => {
    console.log("Error found " , err)
})
 