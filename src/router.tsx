import { createBrowserRouter, Form } from "react-router-dom";
import App from "./App";
import { Contact } from "./components/contact/Contaxt";
import { Admin } from "./components/restaurant/admin/Admin";
import { AdminBookings } from "./components/restaurant/admin/adminBookings/AdminBookings";
import { AdminSearch } from "./components/restaurant/admin/adminSearch/AdminSearch";
import { EditBooking } from "./components/restaurant/admin/editBooking/EditBooking";
import { Booking } from "./components/restaurant/booking/Booking";
import { BookingConfirm } from "./components/restaurant/booking/bookingConfirm/BookingConfirm";
import { CustomerForm } from "./components/restaurant/booking/form/CustomerForm";
import { TableSearch } from "./components/restaurant/booking/tableSearch/TableSearch";
import { TableTimes } from "./components/restaurant/booking/tableTimes/TableTimes";
import { Home } from "./components/restaurant/home/Home";
import { Menu } from "./components/restaurant/menu/Menu";

import { MenuList } from "./components/restaurant/menu/menus/MenuList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/booking",
        element: <Booking />,

        children: [
          {
            path: "/booking/",
            element: <TableSearch />,
            index: true,
          },
          {
            path: "/booking/form",
            element: <CustomerForm />,
          },
          {
            path: "/booking/tabletimes",
            element: <TableTimes />,
          },
          { path: "/booking/confirm", element: <BookingConfirm /> },
        ],
      },
      {
        path: "/menu",
        element: <Menu />,
        children: [
          {
            path: "/menu:id",
            element: <MenuList />,
          },
        ],
      },

      {
        path: "/admin",
        element: <Admin />,
        children: [
          {
            path: "/admin",
            element: <AdminSearch />,
            index: true,
          },
          {
            path: "/admin/bookings",
            element: <AdminBookings />,
          },
          { path: "/admin/edit/:id", element: <EditBooking /> },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
