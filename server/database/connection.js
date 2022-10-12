const mongoose = require('mongoose');

const connectDB = async() => {
        //MongoDB connection string
        const con =  mongoose.connect(process.env.MONGO_URI,err =>{
            if (err) throw err;
            console.log(`MongoDB connected!`);
        })
        
}

module.exports=connectDB;