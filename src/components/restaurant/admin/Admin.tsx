import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { IAdminContext } from "../../../models/IAdminContext";
import { IBookingResponse } from "../../../models/IBookingResponse";
import { IEditBooking } from "../../../models/IEditBooking";
import {
  getBookingsFromLs,
  getFormattedDateFromLs,
  saveBookingsToLs,
  saveFormattedDateToLs,
} from "../../../services/localStorageService";
import { getBookings } from "../../../services/RestaurantService";

export const AdminContext = createContext<IAdminContext>({
  formattedDate: "",
  removeBooking: () => {},
  handleDate: () => {},
  getAdminBookings: () => {},
  handleEditedBooking: () => {},
  bookings: [
    {
      _id: "",
      restaurantId: "",
      date: "",
      time: "",
      numberOfGuests: 0,
      customerId: "",
    },
  ],
});

export const Admin = () => {
  const [formattedDate, setFormattedDate] = useState(getFormattedDateFromLs());
  const [bookings, setBookings] = useState<IBookingResponse[]>(
    getBookingsFromLs()
  );

  const removeBooking = (b: string) => {
    let copy = [...bookings];
    let newCopy = copy.filter((c) => {
      if (b != c._id) {
        return c;
      }
    });

    setBookings(newCopy);
  };

  const handleEditedBooking = (booking: IEditBooking) => {
    let copy = bookings;
    let foundBooking = copy.find((b) => b._id === booking.id);
    if (foundBooking) {
      foundBooking.numberOfGuests = booking.numberOfGuests;
    }

    setBookings(copy);
  };

  useEffect(() => {
    saveBookingsToLs(bookings);
  }, [bookings]);

  const getAdminBookings = async () => {
    let bookings = await getBookings();

    let copy = [...bookings];
    copy = bookings;
    setBookings(copy);
  };

  const handleDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setFormattedDate(formattedDate);
  };

  useEffect(() => {
    saveFormattedDateToLs(formattedDate);
  }, [formattedDate]);

  return (
    <>
      <AdminContext.Provider
        value={{
          removeBooking,
          bookings,
          handleEditedBooking,
          formattedDate,
          handleDate,
          getAdminBookings,
        }}
      >
        <Outlet />
      </AdminContext.Provider>
    </>
  );
};
