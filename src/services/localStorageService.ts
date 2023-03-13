import { IBooking } from "../models/IBooking";
import { restaurantID } from "./RestaurantService";

export const getFromLs = () => {
  let bookingFromLs = localStorage.getItem("booking");
  if (bookingFromLs) {
    return JSON.parse(localStorage.getItem("booking") || "");
  } else {
    return {
      restaurantId: restaurantID,
      date: "",
      time: "",
      numberOfGuests: 0,
      customer: {
        name: "",
        lastname: "",
        email: "",
        phone: "",
      },
    };
  }
};

export const saveToLs = (booking: IBooking) => {
  localStorage.setItem("booking", JSON.stringify(booking));
};
