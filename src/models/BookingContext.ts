import { ChangeEvent } from "react";
import { IBooking } from "./IBooking";

export interface IBookingContext {
  booking: IBooking;
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
  handleAmountOfGuests(g: number): void;
  handleTime(t: string): void;
  handleDate(date: Date): void;
}
