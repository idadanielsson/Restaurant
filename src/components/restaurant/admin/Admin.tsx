import { ChangeEvent, createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { IAdminContext } from "../../../models/IAdminContext";
import { IBooking } from "../../../models/IBooking";
import { BookingContext } from "../booking/Booking";

export const AdminContext = createContext<IAdminContext>({
  handleName: () => {},
  formattedDate: "",
  firstName: "",
  handleDate: () => {},
});

export const Admin = () => {
  const [firstName, setFirstName] = useState("");
  const [selectedBookings, setSelectedBookings] = useState<IBooking[]>([]);
  const [formattedDate, setFormattedDate] = useState("");

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

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
        value={{ handleName, firstName, formattedDate, handleDate }}
      >
        <Outlet />
      </AdminContext.Provider>
    </>
  );
};
