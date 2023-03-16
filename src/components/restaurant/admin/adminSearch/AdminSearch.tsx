import { useContext } from "react";
import { Button1 } from "../../../styled/Buttons";
import {
  BookingWrapper,
  CalendarWrapper,
  SearchTableButtonWrapper,
} from "../../../styled/Wrappers";
import { Calendar } from "react-calendar";
import { AdminContext } from "../Admin";
import { Link } from "react-router-dom";

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
          <Button1 onClick={getAdminBookings} height="50px" width="200px">
            Sök bokningar
          </Button1>
        </Link>
      </SearchTableButtonWrapper>
    </BookingWrapper>
  );
};
