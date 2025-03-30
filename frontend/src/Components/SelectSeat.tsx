import { seats } from "../data/Data"
import SeatInput from "./SeatInput"

const SelectSeat = () => {
    return (
        <div>

            <h1 className="text-xl font-bold">Select Seats:</h1>
            <div className="flex gap-4 py-4">
                {seats.map((item, index) => (
                    <div key={index}>
                        <SeatInput text={item} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SelectSeat