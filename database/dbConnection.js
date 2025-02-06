import mongoose from "mongoose";
export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName : "Restaurant_Table_Booking"
    }).then(()=>{
        console.log("Connected to MongoDB");
    }).catch(err=>{
        console.log(`Some error occured while connecting to database! ${err}`);
    });
};