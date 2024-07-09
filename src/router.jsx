import { createBrowserRouter, Outlet } from "react-router-dom";

// components
import AddClassBody from "./components/elements/AddClassBody";

// pages
import Login from "./pages/login";
import Home from "./pages/home";
import Create from "./pages/create/index";
import Explorer from "./pages/explorer";

export default createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <AddClassBody />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/explorer",
        element: <Explorer />,
      },
    ],
  },
]);
