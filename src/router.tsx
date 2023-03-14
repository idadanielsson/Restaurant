import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Contact } from "./components/contact/Contaxt";
import { Admin } from "./components/restaurant/admin/Admin";
import { Booking } from "./components/restaurant/booking/Booking";
import { Home } from "./components/restaurant/home/Home";
import { Menu } from "./components/restaurant/menu/Menu";
import { MenuCategories } from "./components/restaurant/menu/menuCategories/MenuCategories";
import { Menus } from "./components/restaurant/menu/menus/Menus";
import { menus } from "./models/IMenu";

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
            path: "/menu:id",
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
