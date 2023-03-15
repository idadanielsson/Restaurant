import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IEditBooking } from "../../../../models/IEditBooking";
import { changeBooking } from "../../../../services/RestaurantService";
import { Button1 } from "../../../styled/Buttons";
import { Input } from "../../../styled/Inputs";
import { EditBookingParagraph } from "../../../styled/Paragraphs";
import { AdminContext } from "../Admin";

export const EditBooking = () => {
  const { bookings } = useContext(AdminContext);

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
  };

  return (
    <>
      <EditBookingParagraph>{editableBooking.id}</EditBookingParagraph>
      <EditBookingParagraph>{editableBooking.customerId}</EditBookingParagraph>
      <Input
        placeholder={editableBooking.numberOfGuests.toString()}
        onChange={handleChange}
      ></Input>
      <EditBookingParagraph>{editableBooking.time}</EditBookingParagraph>
      <EditBookingParagraph>{editableBooking.date}</EditBookingParagraph>
      <Button1 onClick={changeBookingFunction}>Ändra Bokning</Button1>
    </>
  );
};
