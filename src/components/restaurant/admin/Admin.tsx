import { ChangeEvent, createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { IAdminContext } from "../../../models/IAdminContext";
import { IBooking } from "../../../models/IBooking";
import { IBookingResponse } from "../../../models/IBookingResponse";
import { getAdminBookings } from "../../../services/RestaurantService";
import { BookingContext } from "../booking/Booking";

export const AdminContext = createContext<IAdminContext>({
  formattedDate: "",
  firstName: "",
  handleDate: () => {},
  getBookings: () => {},
  bookings: [
    {
      id: "",
      restaurantId: "",
      date: "",
      time: "",
      numberOfGuests: 0,
      customerId: "",
    },
  ],
});

export const Admin = () => {
  const [firstName, setFirstName] = useState("");
  const [selectedBookings, setSelectedBookings] = useState<IBooking[]>([]);
  const [formattedDate, setFormattedDate] = useState("");
  const [bookings, setBookings] = useState<IBookingResponse[]>([]);

  const getBookings = async () => {
    let bookings = await getAdminBookings();
    console.log(bookings);

    let copy = [...bookings];
    copy = bookings;
    setBookings(copy);
  };
  console.log(bookings);

  const handleDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setFormattedDate(formattedDate);
  };
  console.log(formattedDate);

  return (
    <>
      <AdminContext.Provider
        value={{
          bookings,
          firstName,
          formattedDate,
          handleDate,
          getBookings,
        }}
      >
        <Outlet />
      </AdminContext.Provider>
    </>
  );
};
