import { useContext } from "react"
import { slots } from "../data/Data"
import RadioComponent from "./RadioComponent"
import BookContext from "../Context/BookContext";

const TimeSchedule = () => {
    
    
    const {timeSchedule, setTimeSchedule} = useContext(BookContext);

    const handleChangeTime = (val: string) => {
        if (setTimeSchedule){
            setTimeSchedule(val)
            localStorage.setItem("time", val);
        }
    }
    
    return (
        <div>

            <h1 className="text-xl font-bold">Select Time Schedule:</h1>
            <div className="flex gap-4 py-4">
                {slots.map((item, index) => (
                    <RadioComponent text={item} key={index} data={timeSchedule} changeSelection={handleChangeTime}/>
                ))}
            </div>

        </div>
    )
}

export default TimeSchedule