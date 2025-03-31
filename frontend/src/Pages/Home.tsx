import { useState } from 'react';
import { createBooking } from "../../api/booking"
import LastBooking from "../Components/LastBooking"
import SelectMovies from "../Components/SelectMovies"
import SelectSeat from "../Components/SelectSeat"
import TimeSchedule from "../Components/TimeSchedule"

const Home = () => {
  const [isBooking, setIsBooking] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [callLastBooking, setCallLastBookingAgain] = useState(false);

  const bookNow = async () => {
    try {
      setIsBooking(true);
      setBookingStatus(null);

      const seats = JSON.parse(localStorage.getItem('seats') || '{}');
      const slot = localStorage.getItem('time') || '';
      const movieName = localStorage.getItem('movie') || '';

      // Validate inputs
      if (!movieName || !slot || !Object.values(seats).some(seat => seat !== "")) {
        throw new Error('Please select movie, time, and at least one seat');
      }

      const bookingData = {
        movieName,
        slot,
        seats
      };

      console.log("Sending:", bookingData); // Debug what's being sent

      const res = await createBooking(bookingData);

      if (res?.success) {
        setBookingStatus({
          success: true,
          message: 'Booking successful!'
        });
        // Clear selections
        localStorage.removeItem('seats');
        localStorage.removeItem('time');
        localStorage.removeItem('movie');

        toggleLastBookingCall();
      } else {
        throw new Error('Booking failed');
      }
    } catch (error) {
      setBookingStatus({
        success: false,
        message: error instanceof Error ? error.message : 'Booking failed'
      });
    } finally {
      setIsBooking(false);
    }
  };


  const toggleLastBookingCall = () => {
    setCallLastBookingAgain(!callLastBooking);
  }

  return (
    <div className="p-10 border bg-orange-100 h-screen">
      {/* Success/Error Alert */}
      {bookingStatus && (
        <div className={`mb-4 p-4 rounded-lg ${bookingStatus.success ? 'bg-green-200' : 'bg-red-200'}`}>
          {bookingStatus.message}
          <button
            className="float-right font-bold"
            onClick={() => setBookingStatus(null)}
          >
            ×
          </button>
        </div>
      )}

      <div className="flex">
        <div className="flex-1">
          <SelectMovies />
        </div>

        <div className="flex-1">
          <LastBooking toggleFunction={toggleLastBookingCall} toggleState={callLastBooking}/>
        </div>
      </div>

      <div>
        <TimeSchedule />
        <SelectSeat />

        <button
          onClick={bookNow}
          disabled={isBooking}
          className={`p-4 border rounded-lg ${isBooking ? 'bg-gray-300' : 'hover:bg-red-300'}`}
        >
          {isBooking ? 'Booking...' : 'Book Now'}
        </button>
      </div>
    </div>
  )
}

export default Home