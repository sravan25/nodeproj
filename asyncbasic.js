console.log("First print")

setTimeout(() => {
    console.log("with 2000sec delay")
},2000)

setTimeout(()=>{
    console.log("with 0 seconds delay")
},0)

console.log("second print");

// promises

var promise = new Promise((
    (resolve,reject) => {

        setTimeout(() => {

            resolve("with Promise data");
        },3000)
    }
))


promise.then(data => {
   console.log(data);
}).catch((error) => {


});
