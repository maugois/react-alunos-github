import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import HomeComponente from "./pages/Home";
import ProfileComponente from "./pages/Profiles";
import "@fontsource-variable/montserrat";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeComponente />,
  },
  {
    path: "/profiles",
    element: <ProfileComponente />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
