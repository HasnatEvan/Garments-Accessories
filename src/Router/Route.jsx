import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import About from "../Page/About/About";
import Contact from "../Page/Contact/Contact";
import GarmentsAccessories from "../Page/GarmentsAccessories/GarmentsAccessories";
import Gallery from "../Page/Gallery/Gallery";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/products', element: <GarmentsAccessories /> },
      { path: '/gallery', element: <Gallery /> },
    ]
  },
]);
