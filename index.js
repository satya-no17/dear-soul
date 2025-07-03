import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
import mongoose from 'mongoose';
import {testOpenChat} from './tes.js';
dotenv.config();
const app = express();
await mongoose.connect(process.env.MONGO_URI, { dbName: "dearSoul" });

console.log("MongoDB Atlas connected ✅");
const schema = new mongoose.Schema({
    name: String,
    message:String
})
const datas = mongoose.model('datas',schema);


app.use(express.static('public'));
const PORT = 3000 ;
// Set view engine
app.set('view engine', 'ejs');

// Middleware
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Server listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.get("/",async(req,res)=>{
  res.render('main')
})
let name ="",message="";
app.post("/send",async(req,res)=>{
const {name , message} = req.body;
 if (!name || !message) {
    console.log("Empty input, skipping...");
    return res.redirect("/"); // or render index without response
  }

  console.log(`name: ${name},message :${message}`); 
  const data = new datas({name : name, message :message})
  await data.save();
 let resp= await testOpenChat(name,message);
res.render('index',{resp,name});
});



 
