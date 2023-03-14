import { ChangeEvent } from "react";
import { IBookingResponse } from "./IBookingResponse";

export interface IAdminContext {
  handleDate(date: Date): void;
  formattedDate: string;
  bookings: IBookingResponse[];
  getBookings(): void;
}
