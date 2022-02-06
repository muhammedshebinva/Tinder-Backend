import  Express  from "express";
import  Mongoose  from "mongoose";

//app config
const app=Express();
const port = process.env.PORT || 8001

//middleweres

// db confic

//api endpoints
app.get('/',(req,res)=> res.status(200).send('Hello gays'))

//listner

app.listen(port, ()=> console.log(`listning on localhost: ${port}`));