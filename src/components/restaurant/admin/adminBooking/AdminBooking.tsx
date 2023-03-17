import { IBookingResponse } from "../../../../models/IBookingResponse";
import { deleteBooking } from "../../../../services/RestaurantService";
import { DeleteButton, EditButton } from "../../../styled/Buttons";
import { AdminBookingParagraph } from "../../../styled/Paragraphs";
import {
  AdminBookingButtonsWrapper,
  AdminBookingWrapper,
} from "../../../styled/Wrappers";

import { RxCross1 } from "react-icons/rx";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface IAdminBookingProps {
  booking: IBookingResponse;
  getAdminBookings(): void;
  removeBooking(b: string): void;
}

export const AdminBooking = (props: IAdminBookingProps) => {
  const navigate = useNavigate();
  const handleDelete = async (id: string) => {
    let removedBooking = await deleteBooking(id);
    if (removedBooking) {
      props.removeBooking(id);
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/admin/edit/${id}`);
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
            props.getAdminBookings();
          }}
        >
          <RxCross1 fontSize="25px" color="red" />
        </DeleteButton>
        <EditButton
          onClick={() => {
            handleEdit(props.booking._id);
          }}
        >
          <FiEdit color="yellow" fontSize="25px" />
        </EditButton>
      </AdminBookingButtonsWrapper>
    </AdminBookingWrapper>
  );
};
