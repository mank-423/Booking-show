import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    movie: {type: String},
    slot: {type: String},
    seats: {
        A1: {type: Number},
        A2: {type: Number},
        A3: {type: Number},
        D1: {type: Number},
        D2: {type: Number},
    },
})

const Ticket = mongoose.model('TicketSchema', ticketSchema);

export default Ticket;
