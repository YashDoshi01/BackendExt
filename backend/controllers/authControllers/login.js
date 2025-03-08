import User from "../../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userLogin = async (req , res)=>{
    const {email , password} = req.body;
    User.findOne({email : email}).then((userFound)=>{
        if(!userFound)
        {
            res.status(403).json({
            success : false,
            message : "No user found !"
            })
        }
        else{
            bcrypt.compare(password, userFound.password).then(function(result) {
               if(result)
               {
                console.log(userFound._id)
                const token = jwt.sign({ email:email }, process.env.JWT_SECRET);
                res.status(200).json({
                    success : true,
                    message : "User login successful",
                    token : token,
                    userId : userFound._id
                })
               }
               else{
                res.status(403).json({
                    success : false,
                    message : "Password is incorrect"
                })
               }
            }).catch((err)=>{throw err});
        }
        
    }).catch((err)=>{
        res.status(500).json({
            success : false,
            message : err
        })
    })

}
export default userLogin