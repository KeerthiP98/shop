import Login from "../models/login";

//get all login users
export const users=async(req,res)=>{
    try
    {
        let users= await Login.find();
        res.status(200).json(users);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({error:error.message})
    }
}


//get 1 login user
export const user=async(req,res)=>{
    let signuserId=req.params.id;
    try
    {
        let users= await Login.findById(signuserId);
        res.status(200).json(users);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({error:error.message})
    }
}
