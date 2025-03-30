import { createContext } from "react";
import { BookContextType } from "../types/context";

// Default values for type safety and fallback
export const BookContext = createContext<BookContextType>({
    movie: "",
    setMovie: () => {},
    timeSchedule: "",
    setTimeSchedule: () => {},
    noOfSeat: { A1: "", A2: "", A3: "", D1: "", D2: "" },
    setNoOfSeat: () => {},
    lastBookingDetails: null,  
    setLastBookingDetails: () => {}  
});

// Optional: Export Provider separately
export const BookContextProvider = BookContext.Provider;

export default BookContext;