const express=require('express');
const cors=require('cors');
const compression=require('compression');
const helmet= require('helmet');
const app=express();
const userRoutes=require('./routes/userRoute');
const PORT=process.env.PORT||8000;
app.use(helmet())
app.use(express.json());
app.use(compression());
app.use(cors())

const connectDB = require("./config/dbConnection");
app.use("/api/users", userRoutes);
require('dotenv').config();


connectDB();
app.listen(PORT,()=>{
    console.log(`server is listen on${PORT}`);
})
