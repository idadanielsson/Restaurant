import { IBookingResponse } from "./IBookingResponse";
import { IEditBooking } from "./IEditBooking";

export interface IAdminContext {
  handleDate(date: Date): void;
  formattedDate: string;
  bookings: IBookingResponse[];
  getAdminBookings(): void;
  removeBooking(b: string): void;
  handleEditedBooking(booking: IEditBooking): void;
}
