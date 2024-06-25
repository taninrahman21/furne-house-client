import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../Layout/Main";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Shop from "../../Pages/Shop/Shop";
import Product from "../../Pages/Shareable/Product/Product";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/product',
        element: <Product />
      },
      {
        path: '/contact-us',
        element: <ContactUs />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      }
    ]
  },
  {
    path: '*',
    element: <Home />
  }
]);