import express from "express";
const router=express.Router();
import {signusers,signuser,signcreateUser,signupdateUser,signdeleteUser} from '../Controllers/signinController';

//get all signin users
router.get('/signusers',signusers);

//get single signin user
router.get('/signusers/:id',signuser);


// post create  signin users
router.post('/signcreateuser',signcreateUser);

//put update signin user
router.put('/signupdateuser/:id',signupdateUser);

//delete delete signin user
router.delete('/signdeleteuser/:id',signdeleteUser);





module.exports=router;