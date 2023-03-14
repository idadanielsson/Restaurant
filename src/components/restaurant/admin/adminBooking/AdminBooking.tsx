import { IBookingResponse } from "../../../../models/IBookingResponse";
import { deleteBooking } from "../../../../services/RestaurantService";
import { DeleteButton } from "../../../styled/Buttons";
import { AdminBookingParagraph } from "../../../styled/Paragraphs";
import {
  AdminBookingButtonsWrapper,
  AdminBookingWrapper,
} from "../../../styled/Wrappers";

import { RxCross1 } from "react-icons/rx";

interface IAdminBookingProps {
  booking: IBookingResponse;
  getBookings(): void;
}

export const AdminBooking = (props: IAdminBookingProps) => {
  const handleDelete = (id: string) => {
    deleteBooking(id);
  };

  return (
    <AdminBookingWrapper>
      <AdminBookingParagraph>
        Kundnummer: {props.booking.customerId}
      </AdminBookingParagraph>
      <AdminBookingParagraph>Datum: {props.booking.date}</AdminBookingParagraph>
      <AdminBookingParagraph>
        Bokningsnummer: {props.booking._id}
      </AdminBookingParagraph>
      <AdminBookingParagraph>
        Antal gäster: {props.booking.numberOfGuests}
      </AdminBookingParagraph>
      <AdminBookingParagraph>Tid: {props.booking.time}</AdminBookingParagraph>
      <AdminBookingButtonsWrapper>
        <DeleteButton
          onClick={() => {
            handleDelete(props.booking._id);
            props.getBookings();
          }}
        >
          <RxCross1 fontSize="25px" color="red" />
        </DeleteButton>
      </AdminBookingButtonsWrapper>
    </AdminBookingWrapper>
  );
};
