const mongoose = require('mongoose');
const validate = require('validator');
mongoose.connect('mongodb://127.0.0.1:27017/NutritionCal',{
    useNewUrlParser:true,
    useCreateIndex:true
});


