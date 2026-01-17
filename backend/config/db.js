import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://user123:user987@cluster0.exkxkun.mongodb.net/food-delivery').then(()=>{
       console.log('DB connected') ;
    })
}
