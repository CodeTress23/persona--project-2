const mongoose = require('mongoose')

const {Schema} = mongoose

const userSchema = new mongoose.Schema({   
    firstName:{
        type: String,
        required: [true, "A first name is required"]
    },
    LastName:{
        type: String,
        required: [true, "A last name is required"]
    },
    username:{
        type: String,required: [true, "A username is required"],
    },  
    password:{
        type: Buffer
    },
    salt:{
        type: Buffer
    },
    strategy:{
        type: String,
        required: [true, "A strategy is required"]
    },
    
})

const User = mongoose.model("User", userSchema);

module.exports = User;