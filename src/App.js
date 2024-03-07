import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import AppLayout from "./components/AppLayout";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";

const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));

import Error from "./pages/Error";
import Body from "./components/Body";
import RestaurantMenu from "./pages/RestaurantMenu";

// Chunking
// Code Splitting
// Dynamic Loading
// Lazy Loading
// On Demand Loading
// Dynamic Imports
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback="{<h1>Loading</h1>}">
            <About />
          </Suspense>
        ),
      },
      {
        path: "/services",
        element: (
          <Suspense fallback="{<h1>Loading</h1>}">
            <Services />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback="{<h1>Loading</h1>}">
            <Contact />
          </Suspense>
        ),
      },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
