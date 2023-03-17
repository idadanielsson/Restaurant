import { useContext, useEffect, useState } from "react";
import { IBookingResponse } from "../../../../models/IBookingResponse";
import {
  getFilteredBookingsFromLs,
  // saveFilteredBookingsToLs,
} from "../../../../services/localStorageService";

import { AdminBookingsWrapper } from "../../../styled/Wrappers";
import { AdminContext } from "../Admin";
import { AdminBooking } from "../adminBooking/AdminBooking";

export const AdminBookings = () => {
  const { removeBooking, bookings, formattedDate, getAdminBookings } =
    useContext(AdminContext);

  const [filteredBookings, setFilteredBookings] = useState<IBookingResponse[]>(
    []
  );
  // useEffect(() => {
  //   saveFilteredBookingsToLs(filteredBookings);
  // }, [filteredBookings]);

  useEffect(() => {
    if (bookings) {
      let copy = bookings.filter((b) => b.date === formattedDate);
      setFilteredBookings(copy);
      console.log(copy);
    }
    let copy = bookings.filter((b) => b.date === formattedDate);
    setFilteredBookings(copy);
  }, [bookings]);

  let adminBookingsHtml = filteredBookings.map((b) => {
    return (
      <AdminBooking
        removeBooking={removeBooking}
        getAdminBookings={getAdminBookings}
        booking={b}
        key={b._id}
      ></AdminBooking>
    );
  });

  return <AdminBookingsWrapper>{adminBookingsHtml}</AdminBookingsWrapper>;
};
