import { User } from "../../models/userModel.js"

async function takingInformation(req,res){
    const {name,address} = req.body

    try {
        if([name,address].some((item)=>item.trim() === "")){
            return res.status(400).json({ message: "All fields must be filled" });
        }
    
        const user = await User.create({
            name,
            address
        })
        
        const createdUser = await User.findById(user._id).select("-password")
        
        if(!createdUser){
            return res.status(400).json({ message: "Something wen wrong while registering user" });
        }
        
        return res.status(201).json({
            message: "User successfully created",
            user: createdUser
        });
    } catch (error) {
        return res.status(400).json({message:error.message})
    }

    
}

export {takingInformation}