import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import UseEffect from "./useEffect";
import App from "./App";
import MyClass from "./Class";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "useEffect",
    element: <UseEffect />,
  },
  {
    path: "class",
    element: <MyClass />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
