const request = require('request');

var fs = require('fs');

var data = "SomeContent fro write"
var promise1 = new Promise((resolve,reject) => {
    fs.writeFile('test.txt', data, function (err) {
        if (err) {
            reject(err);
        } else {
            resolve('Write operation complete.');
        }
    });
});
var promise2 = new Promise((resolve,reject) => {
    fs.readFile('test.txt', function (err,data) {
        if (err) {
            reject(err);
        } else {
            resolve('Write operation complete.');
        }
    });
});

const drinks = (param) => {

    request("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a",(err,res)=>{
        if(err) {
            console.log(err);
        } else {

            var data = `{"name":'sss',"age":34}`
            let jdata = JSON.parse(data)
            console.log(JSON.parse(jdata).name);
            console.log(JSON.parse(res.body)["drinks"][0]);
        }
    });
}

drinks("ss");
function add(a,b) {

    return a+b;

}

function sub(a,b) {
    return a-b;
}
 module.exports= {add,sub}


