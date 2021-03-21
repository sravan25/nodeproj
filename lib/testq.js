function getLength(str) {
    return str.length;
}
console.log(getLength('hello'))
function concatenate(str1,str2) {
    return str1.concat(str2);
}
console.log(concatenate("foo","bar"));

function difference(num1,num2) {
    return Math.abs(num1-num2);
}
console.log(difference(-5,5))

function isOdd(num) {
    return num%2 == 0 ? false:true
}
console.log(isOdd(5));

//6
var arr = [0,0]
function addTwo(arr) {
    let incArr = [];
    for(ele of arr) {
        incArr.push(ele+2);
    }
    return incArr
}

console.log(addTwo(arr));

function convertHexadecimal(str) {

  return parseInt(str,16);
}

console.log(convertHexadecimal('af'));

function sum(arr) {
    let sum = 0;
    for(ele of arr) {
        sum += ele;
    }
    return sum;
}

console.log(sum([4,4,4]))

function onlyTruthy(arr) {
    let a = []
    for(ele of arr) {
        if(ele) {
            a.push(ele);
        }
    }

    return a;
}

console.log(onlyTruthy([false,true,true]))

function removeVowels(str) {
    let ar = str.split("");
    let vowels = ['a','e','i','o','u'];
    let removedVowels = "";

    for(let ele of ar) {
        if(vowels.indexOf(ele.toLowerCase())==-1) {

            removedVowels = removedVowels.concat(ele);
        }
    }
    return removedVowels;
}

console.log(removeVowels('Hello World'))

function getLast(arr) {
    return arr.pop();
}

console.log(getLast([1,2,3]));

function removeDuplicates(arr) {

    let distinctArray = arr.filter(function(elem, index, arr1){

        return arr1.indexOf(elem) === index

    })

    return distinctArray;
}

console.log(removeDuplicates([0,0,1,2,2]))

function join(ar1,ar2) {

     return ar1.concat(ar2);

}

console.log(join([1,2],[1,2]))

function reverse(ar) {

    return ar.reverse();
}

console.log(reverse([1,2,3]));

function toArray() {
    let ar = []
    for (let i=0; i < arguments.length; i++) {
        ar.push(arguments[i]);
    }

    return ar;
}

console.log(toArray(1,2,3))

function  allGreaterThanThree() {
    let length = 0;
    for (let i=0; i < arguments.length; i++) {

        if(arguments[i]>3) {
            length++;
        }
    }

    if(length === arguments.length) {
        return true;
    }
}

console.log(allGreaterThanThree(1,2,3))

function getValues(obj) {
    let ar = [];
    for (let key of Object.keys(obj)) {
        ar.push(obj[key]);
    }

    return ar;
}

console.log(getValues({a:1,b:2}))

function anyGreaterThanThree() {
    let isGreater = false;
    for (let i=0; i < arguments.length; i++) {

        if(arguments[i]>3) {
            return true;
        }
    }
    return isGreater;

}

console.log("===00");
function arity(cb) {
   return  cb(1,1)
};


const add = (a,b) => {
    return a+b
}

const addOne = (a) => {
    return a+1;
}

console.log(arity(add));

console.log(arity(addOne));

function functionalize(f) {

    return function() {
        return f;
    }
}


console.log(functionalize('a')());



function setDefault(a) {

    return function (boo) {
        if(boo === true) {
            return true;
        } else {
            return a;
        }
    }
}


console.log(setDefault(72)(false))

function throwOn2(val) {

    try {
        if(val==2)  {
            throw "2 is not allowed"
        } else {
            return val;
        }

        
    } catch (err) {
        return err;

    }

}

console.log(throwOn2(3))



function promisfy(a) {

    if (a == 2) {
        return a;
    } else {
        let promise = new Promise((resolve, reject) => {

            resolve(a)
        });
        return promise;
    }
}

async function  prom()
{
   console.log(await promisfy(2));
    console.log(await promisfy(3).then(val => val + 1))
}

prom();

var addPromise =(a,b) => {
    return  new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
}
var subPromise = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(a-b)
        },2000);
    })
}

var mulPromise = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(a*b)
        },2000);
    })
}
addPromise(2,3).then(sum => {
    return subPromise(sum,3);
}).then(sum2 => {
    console.log("-----",sum2)
    return mulPromise(sum2,3)
}).then(mul=> {
    console.log("multipli ==",mul);
}).catch(err =>{
    console.log(err)
})

const dowork = async () => {
    const sum = await addPromise(1,2);
    const sum2 = await subPromise(sum,3);
    const mul = await mulPromise(sum2,4)
}

const bcrypt = require('bcryptjs');

const myFunction = async() => {
     const password = 'sra12345'
    const hashedPassword = await bcrypt.hash(password,8);
     const isMatch = await bcrypt.compare("sra12345",hashedPassword)
}
