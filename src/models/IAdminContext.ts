import { ChangeEvent } from "react";

export interface IAdminContext {
  firstName: string;
  handleName(e: ChangeEvent<HTMLInputElement>): void;
  handleDate(date: Date): void;
  formattedDate: string;
}
