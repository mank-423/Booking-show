export type seatType = {
    A1: string;
    A2: string;
    A3: string;
    D1: string;
    D2: string;
}

export type TicketSchema = {
    movie: string,
    slot: string,
    seats: seatType,
}