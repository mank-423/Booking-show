import { useEffect, useState } from "react";
import { seats, slots } from "../data/Data";
import { lastBookingType } from "../types/apiTypes";
import { lastBooking } from "../../api/booking";
import { LastBookingProps } from "../types/radioComponent";

const LastBooking: React.FC<LastBookingProps> = ({ toggleState}) => {
  const [lastBookingDetails, setLastBookingDetails] = useState<lastBookingType | null>(null);

  const getLastBooking = async () => {
    const response = await lastBooking();
    if (response?.success) {
      setLastBookingDetails(response?.data);
    } else {
      setLastBookingDetails({ message: response?.data });
    }
  };

  useEffect(() => {
    getLastBooking();
  }, [toggleState]);

  return (
    <div className="p-10">
      <div className="border p-4">
        <h1 className="font-bold text-lg py-2">Last Booking</h1>

        {lastBookingDetails ? (
          <div className="space-y-2">
            {!lastBookingDetails.seats ? (
              <p className="text-red-500 font-semibold">{'No details right now!'}</p>
            ) : (
              <>
                {lastBookingDetails.seats && (
                  <div>
                    <h2 className="font-semibold">Seats:</h2>
                    <div className="flex gap-4">
                      {seats.map((slot, index) => (
                        <div key={index} className="bg-cyan-200 px-2 py-2">
                          {slot}: {lastBookingDetails.seats?.[slot] || 0}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {lastBookingDetails.slot && <div>Slot: {lastBookingDetails.slot}</div>}
                {lastBookingDetails.movie && <div>Movie: {lastBookingDetails.movie}</div>}
              </>
            )}
          </div>
        ) : (
          <p className="text-gray-500">Fetching last booking details...</p>
        )}
      </div>
    </div>
  );
};

export default LastBooking;
