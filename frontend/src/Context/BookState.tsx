import { useState } from "react";
import { BookContext } from "./BookContext";  // Import the context
import { BookContextType, BookStateProps, seatType } from "../types/context";

const BookState: React.FC<BookStateProps> = ({ children }) => {
    const [movie, setMovie] = useState<string>("");
    const [timeSchedule, setTimeSchedule] = useState<string>('');
    const [noOfSeat, setNoOfSeat] = useState<seatType>({
        A1: '', A2: '', A3: '', D1: '', D2: ''
    });
    const [lastBookingDetails, setLastBookingDetails] = useState(null);

    const contextValue: BookContextType = {
        movie,
        setMovie,
        timeSchedule,
        setTimeSchedule,
        noOfSeat,
        setNoOfSeat,
        lastBookingDetails,
        setLastBookingDetails
    };

    return (
        <BookContext.Provider value={contextValue}>
            {children}
        </BookContext.Provider>
    );
};

export default BookState;