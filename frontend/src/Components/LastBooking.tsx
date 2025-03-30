import { slots } from "../data/Data"

const LastBooking = () => {
    

    return (
        <div className="p-10">
            <div className="border">
                <h1 className="font-bold text-lg py-2">Last Booking</h1>

                <div className="">
                    <h1>
                        Seats:
                    </h1>

                    <div className="flex gap-4">
                        {slots.map((item, index) => {
                            return (
                                <div key={index} className="bg-cyan-200 px-2 py-2">
                                    {item}: 0
                                </div>
                            )
                        })}
                    </div>


                    <div>Slot: 10:00 AM</div>

                    <div>Movie: Tenet</div>
                </div>
            </div>

        </div>
    )
}

export default LastBooking