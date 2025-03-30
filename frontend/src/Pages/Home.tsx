import LastBooking from "../Components/LastBooking"
import SelectMovies from "../Components/SelectMovies"
import SelectSeat from "../Components/SelectSeat"
import TimeSchedule from "../Components/TimeSchedule"

const Home = () => {
  return (
    <div className="p-10 border bg-orange-100 h-screen">
      
      <div className="flex"> 
        <div className="flex-1">
          <SelectMovies />
        </div>

        <div className="flex-1"> 
          <LastBooking />
        </div>
      </div>

      <div>
        <TimeSchedule />

        <SelectSeat />

        <button className="p-4 hover:bg-red-300 border rounded-lg">Book Now</button>
      </div>
    </div>
  )
}

export default Home