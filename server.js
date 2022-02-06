import  Express  from "express";
import  Mongoose  from "mongoose";
import Cors from 'cors';

import Cards from "./dbCards.js";
//app config
const app=Express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://admin:Adminatmongodb@cluster0.lzzuk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


//middleweres
app.use(Express.json());
app.use(Cors());

// db confic
Mongoose.connect(connection_url, {
    //useCreatendex: true, 
    //useFindAndModify: false, 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
 }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
 })

//api endpoints
app.get('/',(req,res)=> res.status(200).send('Hello gays'))

app.post('/tinder/card', (req,res)=>{
    const dbCard = req.body;

    Cards.create(dbCard, (err,data)=>{
        if (err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
});

app.get('/tinder/cards', (req ,res)=>{
    Cards.find((err,data)=>{
        if (err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})
//listner

app.listen(port, ()=> console.log(`listning on localhost: ${port}`));