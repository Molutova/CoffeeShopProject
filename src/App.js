import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import OurCoffee from "./pages/OurCoffee";
import ForYourPleasure from "./pages/ForYourPleasure";
import OneOurCoffee from "./pages/OneOurCoffee";
import Layout from "./components/Layout";

function App() {
  const routerPath = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Main></Main>,
        },
        {
          path: "ourcoffee/:category/:id",
          element: <OneOurCoffee></OneOurCoffee>,
        },
        {
          path: "ourcoffee",
          element: <OurCoffee></OurCoffee>,
        },
        {
          path: "foryourpleasure",
          element: <ForYourPleasure></ForYourPleasure>,
        },
        {
          path: "ourcoffee/:id",
          element: <OneOurCoffee></OneOurCoffee>,
        },
      ],
    },
  ]);
  return <RouterProvider router={routerPath}></RouterProvider>;
}

export default App;
