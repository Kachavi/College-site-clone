import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './About.jsx';
import Tcscab from './Tcscab.jsx';
import Mission from './Mission.jsx';
import Contact from './Contact.jsx';
import Aluminai from './Alumini.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/about/tcsc",
    element: <Tcscab />,
  },
  {
    path: "/about/mission",
    element: <Mission />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/aluminai",
    element: <Aluminai />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
