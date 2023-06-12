const  mongoose= require("mongoose");

const userShema=mongoose.Schema({
    name:{
        type:String,
        require:[true,"name is required"]
    },
    username: {
        type:String,
        require:[true,"username is required"]
    },
    password: {
        type:String,
        require:[true,"password is required"]
    }
})
mongoose.model("User",userShema,"users")