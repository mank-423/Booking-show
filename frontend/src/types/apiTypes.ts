export type seatTypeAPI = {
    [key: string]: any;  // Allow dynamic indexing
};



export type lastBookingType = {
    movie?: string,
    slot?: string,
    seats?: seatTypeAPI,
    message?:string,
}

export type createBookingType = {
    movieName?: string,
    slot?: string,
    seats?: seatTypeAPI,
}

export interface ApiResponse {
    success: boolean;
    data?: any;
    error?: string;
  }