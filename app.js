const http = require('http');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const userRoute = require('./routes/user')


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.use('/', userRoute)

async function start(){
    try {
        const url = `mongodb+srv://Meet:meet1234@cluster0.xikwx.mongodb.net/<dbname>?retryWrites=true&w=majority`;
        await mongoose.connect(url,{useNewUrlParser:true})
        app.listen(3000,()=>{
            console.log(`Server listening on port: 3000`)
        })
    
        } catch (error) {
           console.log(error) 
        }
}

start()
