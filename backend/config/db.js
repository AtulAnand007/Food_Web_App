import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://anandatul089:atulAnand@clusterfood.mt3xu.mongodb.net/?retryWrites=true&w=majority&appName=ClusterFood').then(()=>console.log("DB Connected at katra"))
}

