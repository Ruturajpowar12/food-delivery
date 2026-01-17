import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://user123:user987@cluster0.ewco19f.mongodb.net/food-delivery').then(()=>{
       console.log('DB connected') ;
    })
}
