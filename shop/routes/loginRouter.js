import express from "express";
const router=express.Router();
import {users,user} from '../Controllers/loginController';

//get all login users
router.get('/signusers',users);

//get single login user
router.get('/signusers/:id',user);


module.exports=router;