import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Contact } from "./components/contact/Contaxt";
import { Admin } from "./components/restaurant/admin/Admin";
import { Booking } from "./components/restaurant/booking/Booking";
import { Home } from "./components/restaurant/home/Home";
import { Menu } from "./components/restaurant/home/Menu";

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
