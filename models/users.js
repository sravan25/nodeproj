const mongoose = require('mongoose');
const validate = require('validator');
const users = mongoose.model('users',{
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required: true,
        trim:true,
        lowercase:true,
        validate(value) {
            if(!validate.isEmail(value)) {
                throw new Error('Email is insfdsfvalid');
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        default:0,
        validate(value) {
            if(value <0) {
                throw new Error('Age must be positive number');
            }
        }
    },
    weight:{
        type:Number,
        default:0,
        validate( value) {
            if(value<0) {
                throw new Error('Age must be number');
            }
        }
    },
    height :{
        type:Number,
        default:0,
        validate(value) {
            if(value<0) {
                throw new Errror("Height must be number");
            }
        }
    }
})

module.exports = users;
