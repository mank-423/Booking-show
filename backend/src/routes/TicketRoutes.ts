import express from 'express'
import Ticket from '../models/TicketSchema';
import mongoose from 'mongoose';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const tickets = await Ticket.find();
        if (tickets.length !== 0) {
            res.status(200).json({
                success: true,
                data: {
                    tickets: tickets,
                }
            });

        } else {
            res.status(400).json({
                success: false,
                data: {
                    message: 'No tickets found'
                }
            })
        }
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
})

router.get("/lastBooking", async (req, res) => {
    try {
        const tickets = await Ticket.find();
        const len: number = tickets.length;

        if (len > 0){
            res.status(200).json({ success: true, data: tickets[len - 1] });
        } else if (len === 0){
            res.status(200).json({ success: true, data: tickets });
        } else{
            res.status(404).json({ success: true, data: {message: 'Not found'} });
        }
        
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
})

router.post("/create-booking", async(req, res) => {
    const { movieName, slot, seats } = req.body;

    try {
        const myData = new Ticket({movie: movieName, slot, seats});

        const saved = await myData.save();

        res.status(200).json({ success: true, data: {message: 'Tickets created!', savedData: myData}});
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({success: false, data: {message: 'Internal Server Error'}})
    }
})


export default router;