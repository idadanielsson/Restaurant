import { useContext } from "react";
import { AdminContext } from "../Admin";
import { AdminBooking } from "../adminBooking/AdminBooking";

export const AdminBookings = () => {
  const { bookings, formattedDate } = useContext(AdminContext);

  let adminBookingsHtml = bookings
    .filter((b) => b.date === formattedDate)
    .map((b) => {
      return <AdminBooking></AdminBooking>;
    });
  return <>AdminBooking</>;
};
