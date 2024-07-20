import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GoogleBooks from "./components/pages/googleBooks/googleBooks";
import Bookstore from "./components/pages/bookstore/bookstore";
import Favorites from "./components/pages/favorites/favorites";

import { Base } from "components/blocks";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Base>
        <GoogleBooks />
      </Base>
    ),
  },
  {
    path: "/bookstore",
    element: (
      <Base>
        <Bookstore />
      </Base>
    ),
  },
  {
    path: "/favorites",
    element: (
      <Base>
        <Favorites />
      </Base>
    ),
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
  );
};

export default App;
