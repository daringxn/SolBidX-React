import { createBrowserRouter, Outlet } from "react-router-dom";

// components
import AddClassBody from "./components/elements/AddClassBody";

// pages
import ProtectedPage from "./components/elements/ProtectedPage";
import Login from "./pages/login";
import Home from "./pages/home";
import CreateItem from "./pages/create_item/index";
import CreateCollection from "./pages/create_collection/index";
import ExploreCollections from "./pages/explore_collections";
import ExploreItems from "./pages/explore_items";
import Item from "./pages/item";
import Setting from "./pages/setting";

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
        element: (
          <ProtectedPage>
            <CreateItem />
          </ProtectedPage>
        ),
      },
      {
        path: "/create/collection",
        element: (
          <ProtectedPage>
            <CreateCollection />
          </ProtectedPage>
        ),
      },
      {
        path: "/explore/collections",
        element: <ExploreCollections />,
      },
      {
        path: "/explore/items",
        element: <ExploreItems />,
      },
      {
        path: "/item/:id",
        element: <Item />,
      },
      {
        path: "/setting",
        element: (
          <ProtectedPage>
            <Setting />
          </ProtectedPage>
        ),
      },
    ],
  },
]);
