import { useContext, useState } from "react";
import { IBookingResponse } from "../../../../models/IBookingResponse";
import { AdminBookingsWrapper } from "../../../styled/Wrappers";
import { AdminContext } from "../Admin";
import { AdminBooking } from "../adminBooking/AdminBooking";

export const AdminBookings = () => {
  const { bookings, formattedDate, getBookings } = useContext(AdminContext);

  // const [filteredBookings, setFilteredBookings] = useState<IBookingResponse[]>(
  //   []
  // );

  let adminBookingsHtml = bookings
    .filter((b) => b.date === formattedDate)
    .map((b, i: number) => {
      return (
        <AdminBooking
          getBookings={getBookings}
          booking={b}
          key={b._id}
        ></AdminBooking>
      );
    });
  return <AdminBookingsWrapper>{adminBookingsHtml}</AdminBookingsWrapper>;
};
