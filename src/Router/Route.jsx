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
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/products',
        element: <GarmentsAccessories></GarmentsAccessories>
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>
      }
    ]
  },
]);