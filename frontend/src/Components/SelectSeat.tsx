import { useContext } from "react"
import { seats } from "../data/Data"
import SeatInput from "./SeatInput"
import BookContext from "../Context/BookContext"

const SelectSeat = () => {
    
    const {noOfSeat, setNoOfSeat} = useContext(BookContext)

    const handleChangeSeats = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
    
        setNoOfSeat({
            ...noOfSeat,
            [e.target.name]: e.target.value
        });


        localStorage.setItem('seats', JSON.stringify({
            ...noOfSeat,
            [e.target.name]: Number(e.target.value)
        }));
    }
    
    
    return (
        <div>

            <h1 className="text-xl font-bold">Select Seats:</h1>
            <div className="flex gap-4 py-4">
                {seats.map((item, index) => (
                    <div key={index}>
                        <SeatInput text={item} changeSelection={handleChangeSeats}/>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SelectSeat