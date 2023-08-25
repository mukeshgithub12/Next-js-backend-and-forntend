import mongoose from "mongoose";
// import { User } from "../models/user";

export const connectDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.Mongo_DB_uri, {
            dbName: 'my_nextdb',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("DB connected...");

        // Creating a new user  for TESTING
       /* const user = new User({
            name: "test name",
            email: "test@gmail.com",
            password: "testpassword",
            about: "this is testing",
        }); */

        await user.save();
        console.log('User created:', user);

        // Close the connection after saving the user
        await mongoose.connection.close();
        console.log('DB connection closed.');
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
};
