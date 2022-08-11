import mongoose from "mongoose";
const connectDB =  () => { 
    try {
        const conn = mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParse: true,
            useCreateIndex: true
        });

        console.log(`mongoDB connected: ${conn.connection.host}`)

    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1)
    }
}

export default connectDB;