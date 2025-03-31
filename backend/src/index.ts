import dotenv from "dotenv";
import { connectDB } from "../src/config/db";
import express from 'express';
import cors from 'cors';
import TicketRoutes from './routes/TicketRoutes'


dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const mongoUrl = process.env.MONGO_DB_URL || "";
const port = process.env.PORT || 5000;

connectDB(mongoUrl);

app.use('/api/tickets', TicketRoutes);

app.listen(port, () => {
    console.log("Server started at port", port);
})



