import { useContext } from "react";

import {
  BookingWrapper,
  CalendarWrapper,
  SearchTableButtonWrapper,
} from "../../../styled/Wrappers";
import { Calendar } from "react-calendar";
import { AdminContext } from "../Admin";
import { Link } from "react-router-dom";
import { ButtonFade } from "../../../styled/Buttons";

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
          <ButtonFade onClick={getAdminBookings} height="50px" width="200px">
            Sök bokningar
          </ButtonFade>
        </Link>
      </SearchTableButtonWrapper>
    </BookingWrapper>
  );
};
