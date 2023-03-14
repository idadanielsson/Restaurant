import { ChangeEvent } from "react";
import { IBookingResponse } from "./IBookingResponse";

export interface IAdminContext {
  firstName: string;
  handleDate(date: Date): void;
  formattedDate: string;
  bookings: IBookingResponse[];
  getBookings(): void;
}
