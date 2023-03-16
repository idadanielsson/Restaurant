import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IEditBooking } from "../../../../models/IEditBooking";
import {
  changeBooking,
  getBookings,
} from "../../../../services/RestaurantService";
import { EditButton } from "../../../styled/Buttons";
import { Input } from "../../../styled/Inputs";
import { EditBookingParagraph } from "../../../styled/Paragraphs";
import { Wrapper } from "../../../styled/Wrappers";
import { AdminContext } from "../Admin";

export const EditBooking = () => {
  const { bookings, handleEditedBooking } = useContext(AdminContext);

  const navigate = useNavigate();

  const [editableBooking, setEditableBooking] = useState<IEditBooking>({
    id: "",
    restaurantId: "",
    date: "",
    time: "",
    numberOfGuests: 0,
    customerId: "",
  });

  let { id } = useParams();

  useEffect(() => {
    let foundBooking = bookings.find((b) => b._id === id);

    if (foundBooking) {
      setEditableBooking({ ...foundBooking, id: foundBooking._id });
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let copy = { ...editableBooking };
    copy.numberOfGuests = +e.target.value;
    setEditableBooking(copy);
  };
  console.log(editableBooking);

  const changeBookingFunction = () => {
    changeBooking(editableBooking);
    navigate(`/admin/bookings`);
    handleEditedBooking(editableBooking);
  };

  return (
    <Wrapper
      height="100vh"
      display="flex"
      justify="center"
      align="center"
      direction="column"
    >
      <EditBookingParagraph>
        Bokningsid: {editableBooking.id}
      </EditBookingParagraph>
      <EditBookingParagraph>
        Kundid: {editableBooking.customerId}
      </EditBookingParagraph>
      <EditBookingParagraph>Antal gäster:</EditBookingParagraph>
      <Input
        placeholder={editableBooking.numberOfGuests.toString()}
        onChange={handleChange}
      ></Input>
      <EditBookingParagraph>Tid: {editableBooking.time}</EditBookingParagraph>
      <EditBookingParagraph>Datum: {editableBooking.date}</EditBookingParagraph>
      <EditButton padding="20px 40px" onClick={changeBookingFunction}>
        Ändra Bokning
      </EditButton>
    </Wrapper>
  );
};
