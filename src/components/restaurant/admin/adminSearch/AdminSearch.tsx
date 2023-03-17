import { useContext } from "react";

import {
  BookingWrapper,
  CalendarWrapper,
  SearchTableButtonWrapper,
} from "../../../styled/Wrappers";
import { Calendar } from "react-calendar";
import { AdminContext } from "../Admin";
import { Link } from "react-router-dom";
import { Button } from "../../../styled/Buttons";

export const AdminSearch = () => {
  const { handleDate, getAdminBookings } = useContext(AdminContext);

  return (
    <BookingWrapper>
      <CalendarWrapper>
        <Calendar onClickDay={handleDate} />
      </CalendarWrapper>

      <SearchTableButtonWrapper>
        <Link to="/admin/bookings">
          {" "}
          <Button onClick={getAdminBookings} height="50px" width="200px">
            Sök bokningar
          </Button>
        </Link>
      </SearchTableButtonWrapper>
    </BookingWrapper>
  );
};
