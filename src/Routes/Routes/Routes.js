import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Product from "../../Pages/Shareable/Product/Product";
import Shop from "../../Pages/Shop/Shop";
import SignUp from "../../Pages/SignUp/SignUp";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/product/:id',
        element: <Product />
      },
      // {
      //   path: '/product/:id',
      //   element: <Product></Product>
      //   // loader: ({ params }) => fetch(`https://the-smart-tutor-server.vercel.app/service/${params.id}`)
      // },
      {
        path: '/contact-us',
        element: <ContactUs />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      }
    ]
  },
  {
    path: '*',
    element: <Home />
  }
]);