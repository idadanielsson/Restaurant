import { createBrowserRouter, Form } from "react-router-dom";
import App from "./App";
import { Contact } from "./components/contact/Contaxt";
import { Admin } from "./components/restaurant/admin/Admin";
import { AdminSearch } from "./components/restaurant/admin/adminSearch/AdminSearch";
import { Booking } from "./components/restaurant/booking/Booking";
import { CustomerForm } from "./components/restaurant/booking/form/CustomerForm";
import { TableSearch } from "./components/restaurant/booking/tableSearch/TableSearch";
import { TableTimes } from "./components/restaurant/booking/tableTimes/TableTimes";
import { Home } from "./components/restaurant/home/Home";
import { Menu } from "./components/restaurant/menu/Menu";

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
        ],
      },
      {
        path: "/menu",
        element: <Menu />,
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
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
