const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = "NutritionCal"

mongoClient.connect(connectionUrl,{useNewUrlParser:true,useUnifiedTopology: true },
    (error,client) => {
 if(error) {
    return console.log("Unable to connect database");
 }
 const db = client.db(databaseName);
 const coll =  db.collection('users');
 coll.insertOne({
     name:'sreddy',
     password:'something',
     email:'gskreddy26@gmail.com',
     mob:'9535680050'
 },(error,result) =>{
      if(error) {
          console.log("Unable to insert tasks");
      }
 });

 db.collection('users').find({name:'sravan'}).toArray((error,users) =>
    {
       console.log("users",users);
    });
 db.collection('users').updateOne({
     email:''
 },{
     $set:{
         name:'sravan'
     }
 }).then((result) => {
     console.log(result.modifiedCount)
 }).catch((error) => {

    console.log(error);
 });
 db.collection('users').deleteMany({
     name:'srava'
 }).then(result=>{
     console.log(result)
 }).catch(error =>{
     console.log(error);
 });
 db.collection('users').deleteOne({
     name:'ss',
 }).then(result => {
     console.log(error);
 }).catch(error => {
     console.log(error)
 })

});
