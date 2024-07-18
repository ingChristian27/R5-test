import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GoogleBooks from "./components/pages/googleBooks/googleBooks";
import Bookstore from "./components/pages/bookstore/bookstore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GoogleBooks />,
  },
  {
    path: "/bookstore",
    element: <Bookstore />,
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
