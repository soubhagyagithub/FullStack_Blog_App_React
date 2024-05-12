import mongoose from "mongoose";

 const Connection = async (username, password)=>{
    const URL =`mongodb+srv://${username}:${password}@cluster0.eayhur3.mongodb.net/?retryWrites=true&w=majority`
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Sucessfully ');
    } catch (error) {
        console.log('Error while connecting with database',error);
        
    }
}

export default Connection;