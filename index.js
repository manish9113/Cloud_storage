import express from 'express'
import dotenv from 'dotenv';
import Connection from './database/db.js';
import router from './routes/route.js';
import cors from 'cors';

dotenv.config();


const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use('/',router);

const PORT = 8000 || process.env.SERVER_PORT;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
app.listen(PORT,()=>{
    console.log('app listening at port 8000');
})

Connection(USERNAME,PASSWORD);