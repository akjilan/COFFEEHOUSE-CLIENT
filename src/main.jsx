import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import AddCoffee from "./pages/AddCoffee/AddCoffee.jsx";
import UpdateCoffee from "./pages/UpdateCoffee/UpdateCoffee.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>,
  },
  {
    path:"addcoffee",
    element:<AddCoffee></AddCoffee>,

  },
  {
    path:"blogs",
    element:<Blogs></Blogs>

  },
  {
    path:"updatecoffee/:id",
    element:<UpdateCoffee></UpdateCoffee>,
    loader:({params})=>fetch(`http://localhost:5000/updateCoffee/${params.id}`)

  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
