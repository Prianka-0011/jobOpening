const mongoose = require("mongoose");
const User=mongoose.model("User");
let status=200;
const response ={
    data:null,
    message:null
}

const login = function(req, res) {
    const newUser =req.body.username;
    User.findOne({"username":newUser.username}).exec().then((user)=>{
        if(user) {
            if(newUser.password === user.password)
            {
                status = 200;
                response.data = user;
                response.message = "Login successfull!"
            } else {
                status = 404;
                response.data = null;
                response.message = "Invalid credintials!"
            }
        }
    }).catch((error)=>{
                status = 500;
                response.data = null;
                response.message = "internal server error"
    }).finally(()=> {
        res.status(status).json(response);
    })
}

module.exports={
    login
}