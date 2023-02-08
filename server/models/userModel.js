const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    profile:{
        type:String,
        required:false,
        default:"https://media.istockphoto.com/id/1277785530/photo/social-network-media-connections.jpg?b=1&s=170667a&w=0&k=20&c=9WQkG-XreI4zlZN1n6Mkz17EzkKGCEqdgG6mZnwkII8="
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    bookings:{
        type:Array,
    }
},{
    timestamps:true,
})

module.exports = mongoose.model('User',userSchema)