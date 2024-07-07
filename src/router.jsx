import { createBrowserRouter, Outlet } from "react-router-dom";

// components
import AddClassBody from "./components/elements/AddClassBody";

// pages
import Login from "./pages/login";

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
    ],
  },
]);
