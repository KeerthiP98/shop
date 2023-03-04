import express  from "express";
import bodyParser from "body-parser";
import Dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
//import loginRouter from "./routes/loginRouter";
import {readdirSync} from "fs";

Dotenv.config();
const app=express();

//middlewarees
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

//routes
//app.use("/api",loginRouter);
//autoload routes
readdirSync('./routes').map((r)=>
app.use('/api',require(`./routes/${r}`)));


//ap5IOuogIfvnABPW

//db
mongoose.connect('mongodb+srv://admin:ap5IOuogIfvnABPW@cluster0.qyxmr.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log("DB connected"))
.catch((err)=>console.log("DB is not connected", err));



//listen
const port=3002||4000;
app.listen(port,()=>console.log(`server is running on ${port}`))


