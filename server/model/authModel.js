const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const authModel = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    RollNo: { type: String, required: true }
})

authModel.pre("save",async function(next){
    try {
        if(this.isModified("password")){
            this.password = await bcrypt.hash(this.password, 10);
        }
    } catch (error) {
        next(error)
    }
})

authModel.methods.comparePassword =async function(password){
    return bcrypt.compare(password,this.password)
}

authModel.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userId : this._id.toString(),
            email:this.email,
        },"poiuytrewqazxcvbnmpoiugfdkjhgfds",{
            expiresIn:"365d"
        })
    } catch (error) {
        console.log(error)
    }
}

const user = new mongoose.model("usermodel",authModel)
module.exports = user