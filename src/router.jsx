import { createBrowserRouter, Outlet } from "react-router-dom";

// components
import AddClassBody from "./components/elements/AddClassBody";

// pages
import Login from "./pages/login";
import Home from "./pages/home";
import CreateItem from "./pages/create_item/index";
import CreateCollection from "./pages/create_collection/index";
import ExploreCollections from "./pages/explore_collections";
import Item from "./pages/item";

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
        path: "/create/item",
        element: <CreateItem />,
      },
      {
        path: "/create/collection",
        element: <CreateCollection />,
      },
      {
        path: "/explore/collections",
        element: <ExploreCollections />,
      },
      {
        path: "/item/:id",
        element: <Item />,
      },
    ],
  },
]);
