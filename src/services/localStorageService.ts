import { IBooking } from "../models/IBooking";
import { IBookingResponse } from "../models/IBookingResponse";
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

export const saveBookingsToLs = (bookings: IBookingResponse[]) => {
  localStorage.setItem("bookings", JSON.stringify(bookings));
};

export const getBookingsFromLs = () => {
  let bookingsFromLs = localStorage.getItem("bookings");
  if (bookingsFromLs) {
    return JSON.parse(localStorage.getItem("bookings") || "");
  } else {
    return {
      _id: "",
      restaurantId: "",
      date: "",
      time: "",
      numberOfGuests: 0,
      customerId: "",
    };
  }
};

export const saveFilteredBookingsToLs = (
  filteredBookings: IBookingResponse[]
) => {
  localStorage.setItem("filteredBookings", JSON.stringify(filteredBookings));
};

export const getFilteredBookingsFromLs = () => {
  let filteredBookingsFromLs = localStorage.getItem("filteredBookings");

  if (filteredBookingsFromLs) {
    console.log("hej");

    return JSON.parse(localStorage.getItem("filteredBookings") || "");
  } else {
    return [
      {
        _id: "",
        restaurantId: "",
        date: "",
        time: "",
        numberOfGuests: 0,
        customerId: "",
      },
    ];
  }
};

export const saveFormattedDateToLs = (date: string) => {
  localStorage.setItem("date", date);
};

export const getFormattedDateFromLs = () => {
  let formattedDateFromLs = localStorage.getItem("date");

  if (formattedDateFromLs) {
    return localStorage.getItem("date") || "";
  } else {
    return "";
  }
};
