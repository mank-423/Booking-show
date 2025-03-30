export type seatType = {
    A1: string;
    A2: string;
    A3: string;
    D1: string;
    D2: string;
}

export interface BookContextType {
    movie: string;
    setMovie: React.Dispatch<React.SetStateAction<string>>;
    timeSchedule: string;
    setTimeSchedule: React.Dispatch<React.SetStateAction<string>>;
    noOfSeat: seatType;
    setNoOfSeat: React.Dispatch<React.SetStateAction<seatType>>;
    lastBookingDetails: any;
    setLastBookingDetails: React.Dispatch<React.SetStateAction<any>>;
}

export type BookStateProps = {
    children: React.ReactNode; 
};