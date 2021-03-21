const express = require('express')
const users = require("./routes/users");
const items = require("./routes/items");
const path = require('path');
const cors = require('cors');

const app = express()
const port = 9000

//app.use(express.static('public'))
console.log("dirname =",__dirname);
app.use('/static', express.static(path.join(__dirname, 'public')))
app.all('/users', function (req, res, next) {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
})
app.use(express.json())
app.use(cors())
app.use(function(req, res, next){

    console.log("Middleware excuting");

    next();
});

app.use(validate);

function validate(req,res,next) {

    console.log("I am validating function ==")
    next();
}

app.use("/users",users);
app.use("/items",items);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
