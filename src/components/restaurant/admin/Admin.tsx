import { ChangeEvent, createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { IAdminContext } from "../../../models/IAdminContext";
import { IBookingResponse } from "../../../models/IBookingResponse";
import { getAdminBookings } from "../../../services/RestaurantService";

export const AdminContext = createContext<IAdminContext>({
  formattedDate: "",

  handleDate: () => {},
  getBookings: () => {},
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

  const [filteredBookings, setFilteredBookings] = useState<IBookingResponse[]>(
    []
  );

  const getBookings = async () => {
    let bookings = await getAdminBookings();
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
          bookings,

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
