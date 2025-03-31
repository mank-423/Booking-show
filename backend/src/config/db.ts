import mongoose from "mongoose";

export const connectDB = async (url: string) => {
    try {
        await mongoose.connect(url);
        console.log('Database Connected');
    } catch (error) {
        console.log('Database connection failed:', error);
        process.exit(1);
    }
}