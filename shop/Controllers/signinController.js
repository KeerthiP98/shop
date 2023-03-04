import Signin from "../models/signin";

//get all signin users
export const signusers=async(req,res)=>{
    try
    {
        let users= await Signin.find();
        res.status(200).json(users);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({error:error.message})
    }
}


//get single signin user
export const signuser=async(req,res)=>{
    let signuserId=req.params.id;
    try
    {
        let users= await Signin.findById(signuserId);
        res.status(200).json(users);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({error:error.message})
    }
}

//post create signin users

export const signcreateUser=async(req,res)=>{
let newSign={
    Name:req.body.Name,
    Surname:req.body.Surname,
    Email:req.body.Email,
    PhoneNumber:req.body.PhoneNumber,
    Password:req.body.Password
}
try{
    let signuser=await Signin.findOne({Email:newSign.Email})
    let signuser1=await Signin.findOne({Password:newSign.Password})
    let signuser2=await Signin.findOne({PhoneNumber:newSign.PhoneNumber})

    if(signuser)
    {
   return res.status(400).json({
       msg:"already signed  up"
   })
    }
    if(signuser1)
    {
   return res.status(400).json({
       msg:"already signed  up"
   })
    }
    if(signuser2)
    {
   return res.status(400).json({
       msg:"already signed  up"
   })
    }

    signuser=new Signin(newSign);
    signuser=await signuser.save();
    res.status(201).json({
result:"signup successfully"
    })
}
catch(error)
{
    console.log(error);
        res.status(500).json({error:error.message})
    }
}


//post update signin user

export const signupdateUser=async(req,res)=>{
    let signuserId=req.params.id;
    let updateuser={
        PhoneNumber:req.body.PhoneNumber,
        Password:req.body.Password
    }
    try{
        let user=await Signin.findById(signuserId)
        if(!user)
        {
       return res.status(400).json({
           msg:"SORRY,YOU DON'T HAVE ACCOUNT WITH US"
       })
        }
    
        user=await Signin.findByIdAndUpdate(signuserId,
            {
                $set: updateuser
            },
            {new: true}
            )

        res.status(201).json({
    result:"updated details  successfully",
             user:user
        })
    }
    catch(error)
    {
        console.log(error);
            res.status(500).json({error:error.message})
        }
    }


    //get single signin user
export const signdeleteUser=async(req,res)=>{
    let signuserId=req.params.id;
    try
    {
        let users= await Signin.findById(signuserId);
        if(!users)
        {
            return res.status(400).json({
                msg:"SORRY,YOU DON'T HAVE ACCOUNT WITH US"
            });
        }
        users=await Signin.findByIdAndDelete(signuserId);
        res.status(201).json({
            result:"cancelled account",
            signuserId:signuserId
        })

    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({error:error.message})
    }
}