import React from "react"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer";
import Drive from "./components/Drive"
import 'leaflet/dist/leaflet.css';
import Order from "./components/Order";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import News from "./components/News";
import Aboutus from "./components/Aboutus";

const router = createBrowserRouter([
    {
      path : "/",
      element: <Layout trans={false}/>,
      children : [
        {
          path : "/",
          element: <Body />
        },
        {
          path : "drive",
          element: <Drive />
        },
        {
          path : "order/:item",
          element: <Order />
        },
        
      ]},
      {
      path: "/footer",
      element: <Layout trans={true}/>,
      children: [
        {
          path : "aboutus",
          element: <Aboutus />
        },
        {
          path : "contact",
          element: <Contact />
        },
        {
          path : "news",
          element: <News />
        }
      ]
    },
    {
          path : "*",
          element: <NotFound />
        },

  ])

export default function App(){
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}