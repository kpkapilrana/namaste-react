import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import AppLayout from "./components/AppLayout";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Body from "./components/Body";
import RestaurantMenu from "./pages/RestaurantMenu";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
