import axios from "axios";
import { IBooking } from "../models/IBooking";
import { IBookingResponse } from "../models/IBookingResponse";
import { IEditBooking } from "../models/IEditBooking";

export const restaurantID = `640f16b350c6ca4f37fce69d`;
const API = `https://school-restaurant-api.azurewebsites.net`;

// export const sendData = async () => {
//   let response = await axios.post(`${API}/restaurant/create`, {
//     name: "76 Gastronome",
//     address: {
//       street: "Nybrogatan 15",
//       zip: "114 39",
//       city: "Stockholm",
//     },
//   });
//   return response.data;
// };

export const getBookings = async () => {
  let response = await axios.get(`${API}/booking/restaurant/${restaurantID}`);

  return response.data;
};

export const createBooking = async (booking: IBooking) => {
  let response = await axios.post(`${API}/booking/create`, booking);
  return response.data;
};

export const customerId = async () => {
  let response = await axios.get(`${API}/customer/${restaurantID}`);

  return response.data;
};

export const deleteBooking = async (bookingId: string): Promise<boolean> => {
  let response = await axios.delete(`${API}/booking/delete/${bookingId}`);

  return response.status === 200;
};

export const changeBooking = async (booking: IEditBooking) => {
  let response = await axios.put(
    `${API}/booking/update/${booking.id}`,
    booking
  );
  return response.data;
};
