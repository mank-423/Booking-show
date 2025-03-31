import axios from 'axios';
import { createBookingType } from '../src/types/apiTypes';

export const lastBooking = async () => {
    try {
        const res = await axios.get('http://localhost:5000/api/tickets/lastBooking', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        console.log("API Response:", res.data);

        return {
            success: res.data.success,
            data: res.data.success ? res.data.data : res.data.message
        };
    } catch (error) {
        console.error('API Error:', error);
        return {
            success: false,
            error: error
        };
    }
}


export const createBooking = async (body: createBookingType) => {
    try {
        const res = await axios.post('http://localhost:5000/api/tickets/create-booking', body, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return { success: true, data: res.data };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // Handle Axios-specific errors
            console.error('API Error:', error.response?.data || error.message);
            return {
                success: false,
                error: error.response?.data?.message || 'Request failed'
            };
        } else {
            // Handle non-Axios errors
            console.error('Unexpected Error:', error);
            return { success: false, error: 'An unexpected error occurred' };
        }
    }
};
