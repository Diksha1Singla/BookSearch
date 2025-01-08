const user = require("../model/authModel")
const location = require("../model/LocationModel")

const register = async(req,res)=>{
    try {
        const {username,email,password,RollNo} = req.body;
        const userExist = await user.findOne({email})
        if(userExist){
            alert("user already exist")
            return res.status(400).json({message:"User already exist"})
        }
        const createdUser = await user.create({username,email,password,RollNo})
        res.status(200).json({
            createdUser,
            token:await createdUser.generateToken(),
            user_id:createdUser._id.toString()
        })
    } catch (error) {
        console.log(error);
        res.status(510).json("Registration unsuccessful")
    }
} 

const login = async(req,res)=>{

    try{
        const {email,password} = req.body
        const userExit = await user.findOne({email})
        if(!userExit){
            return res.status(400).json({Error:"User Doesn't Exist"})
        }
        const IsValidator = await userExit.comparePassword(password)
        if(IsValidator){
            res.status(200).json({
                token : await userExit.generateToken(),
                userId :  userExit._id.toString()
            })
        }
        else{
            return res.status(400).json({Error:"Invalid Login Details"})
        }
    }
    catch(error){
        console.log(error)
        res.status(500).json("Page Not Found!!")
    }

}

const fetchLocation = async(req,res)=>{
    try {
        const response = await location.find() ;
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {login,register,fetchLocation}