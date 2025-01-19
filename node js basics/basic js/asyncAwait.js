function delay(time) {
    console.log("delay")
    return new Promise( (resolve) => setTimeout(resolve , time));
}

 async function  delayGreet(names) {
    await delay(3000);
   console.log(`Hello ${names}`)
}
 
await delayGreet("Rishikesh");

async function division(num1 , num2) {
    try {
        if(num2 == 0) throw new Error("any num can not divide by 0");
        return num1/num2;
        
        
    } catch (error) {
        console.log(error , "Error found")
        
    }
}
console.log(await division(4 , 0))
console.log(await division(4 , 2))