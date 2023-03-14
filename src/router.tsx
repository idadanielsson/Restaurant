import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Contact } from "./components/contact/Contaxt";
import { Admin } from "./components/restaurant/admin/Admin";
import { Booking } from "./components/restaurant/booking/Booking";
import { Home } from "./components/restaurant/home/Home";
import { Menu } from "./components/restaurant/menu/Menu";
import { Menus } from "./components/restaurant/menu/menus/Menus";

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
      },
      {
        path: "/menu",
        element: <Menu />,
        children: [
          {
            path: "/menu:name",
            element: <Menus />,
          },
        ],
      },

      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
