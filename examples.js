var fs = require('fs');
var val = require('validator');
var ch = require('chalk');
var yargs = require('yargs')


console.log(ch.inverse.green('Hi How r u'));
console.log(val.isEmail('gskreddy26@gmail.com'));

console.log(process.argv[2]);

yargs.command({
    command:"add",
    describe:"it will add two number",
    builder:{
        title:{
            describe:"title is necessary",
            demandCommand:true,
            type:'string',
        }
    },
    handler:function (argv) {
        console.log("addition of two numbers == ",argv.title);
        console.log("addition of two numbers body == ",argv.body);
    }
})

console.log(yargs.argv);
