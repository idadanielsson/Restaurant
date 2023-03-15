import { ChangeEvent } from "react";
import { IBookingResponse } from "./IBookingResponse";

export interface IAdminContext {
  handleDate(date: Date): void;
  formattedDate: string;
  bookings: IBookingResponse[];
  getAdminBookings(): void;
  removeBooking(b: string): void;
}
