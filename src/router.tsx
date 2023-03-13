import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Contact } from "./components/contact/Contaxt";
import { Admin } from "./components/restaurant/admin/Admin";
import { Booking } from "./components/restaurant/booking/Booking";
import { Home } from "./components/restaurant/home/Home";
import { Category } from "./components/restaurant/home/menu/Category";
import { Menu } from "./components/restaurant/home/menu/Menu";
import { MenuItem } from "./components/restaurant/home/menu/MenuItem";
import { MenuList } from "./components/restaurant/home/menu/MenuList";

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
            path: "/menu/:id",
            element: <MenuList />,
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
