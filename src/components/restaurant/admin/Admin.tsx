import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { IAdminContext } from "../../../models/IAdminContext";
import { IBookingResponse } from "../../../models/IBookingResponse";
import { getBookings } from "../../../services/RestaurantService";

export const AdminContext = createContext<IAdminContext>({
  formattedDate: "",
  removeBooking: () => {},
  handleDate: () => {},
  getAdminBookings: () => {},
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
  const [formattedDate, setFormattedDate] = useState("");
  const [bookings, setBookings] = useState<IBookingResponse[]>([]);

  const removeBooking = (b: string) => {
    let copy = [...bookings];
    let newCopy = copy.filter((c) => {
      if (b != c._id) {
        return c;
      }
    });

    setBookings(newCopy);
  };

  const getAdminBookings = async () => {
    let bookings = await getBookings();
    console.log(bookings);

    let copy = [...bookings];
    copy = bookings;
    setBookings(copy);

    // filterBookings();
  };
  console.log(bookings);

  // const filterBookings = () => {
  //   let copy = bookings.filter((b) => b.date === formattedDate);
  //   setFilteredBookings
  // };

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
          removeBooking,
          bookings,

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
