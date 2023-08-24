import mongoose from "mongoose";

export  const connectDb =  async ()   =>{
     try {
      const {conection} =  await  mongoose.connect(process.env.Mongo_DB_uri, {
            dbName: 'my_nextdb',
        })
         console.log('db connected');
         console.log(conection);
     }catch (error){
         console.log('faild to connect database');
         console.log("error")
     }
}