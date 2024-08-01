import mongoose from "mongoose";

const connectDb = async () => {
    try {
        // const conn = await mongoose.connect(process.env.MONGO_URI);
        const conn = await mongoose.connect("mongodb+srv://admin:tlCC7CbygwKwdaxL@migrate-guide.c2cqltx.mongodb.net/?retryWrites=true&w=majority&appName=migrate-guide");

        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error ${error.message}`);
        process.exit(1);
    }
}


export default connectDb;
