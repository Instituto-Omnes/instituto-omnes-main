import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/sobre",
    element: <About />,
  },

  {
    path: "/contato",
    element: <Contact />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}