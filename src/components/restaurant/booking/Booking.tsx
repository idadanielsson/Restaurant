import { ChangeEvent, createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { IBookingContext } from "../../../models/BookingContext";
import { IBooking } from "../../../models/IBooking";
import { getFromLs, saveToLs } from "../../../services/localStorageService";

export const BookingContext = createContext<IBookingContext>({
  handleAmountOfGuests: () => {},
  handleTime: () => {},
  handleDate: () => {},
  handleChange: () => {},
  booking: {
    restaurantId: "",
    date: "",
    time: "",
    numberOfGuests: 0,
    customer: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
    },
  },
});

export const Booking = () => {
  const [booking, setBooking] = useState<IBooking>(getFromLs());

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let copy = { ...booking };

    copy.customer = { ...copy.customer, [e.target.name]: e.target.value };

    setBooking(copy);
  };

  useEffect(() => {
    saveToLs(booking);
  }, [booking]);

  const handleAmountOfGuests = (g: number) => {
    let copy = { ...booking };

    copy.numberOfGuests = g;

    setBooking(copy);
  };

  const handleTime = (t: string) => {
    let copy = { ...booking };
    copy.time = t;
    setBooking(copy);
  };

  const handleDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    let copy = { ...booking };
    copy.date = formattedDate;

    setBooking(copy);
  };

  return (
    <BookingContext.Provider
      value={{
        handleAmountOfGuests,
        handleTime,
        handleDate,
        booking,
        handleChange,
      }}
    >
      <Outlet />
    </BookingContext.Provider>
  );
};
