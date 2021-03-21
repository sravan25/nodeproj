var express = require('express')
var router = express.Router();
require('../db/mongoose');
var users = require('../models/users')


router.use(express.json())
router.post("/login",(req,res) =>{

    const body = {};

    console.log("req boidy ==",req.body);
    body.name = req.body.uname;
    body.password = req.body.password
    //body.gender  = req.body.gender
    console.log("body",body);
    users.find(body).then((user) => {

        console.log("user == ",user);
        res.json({
                data:user
        })
    }).catch((err)=>{

    });
});

router.post("/register",(req,res) =>{

    const user = new users(req.body);
    user.save().then(()=>{
        res.send(user);
    }).catch((error) =>{
        res.status(500).send(error);
    })

});

router.get("/profile",(req,res) => {

   // let name = req.params.name;
    let name= req.query.name
    let email  = req.query.email
    users.find({
        "name":name,
        "email":email
    }).then((users)=>{
          res.status(201).send(users)
    }).catch((err) => {
        res.status(500).send(err);
    })
});

router.get("/activities",(req,res) => {


});

router.delete("/:id",async(req,res) =>{

    try {
        const user  = await users.findByIdAndDelete(req.params.id);
        if(!user) {
            res.status(404).send()
        }
        res.send(user)
    } catch(e) {
        res.status(500).send();
    }
});

router.patch("/users/:id",async(req,res) => {

    const updates = Object.keys(req.body);
    const allowUpdates = ["name","email","password","age"]
    const isValidOperation = updates.every((update) => allowUpdates.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({error:'Invalid updates'})
    }

    try {
        const user = await users.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true})
        if(!user) {
            return res.status(404).send()
        }
        res.send(user);
    } catch(err) {
        res.status(400).send(e);
    }
})


module.exports = router;

