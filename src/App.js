import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import OurCoffee from "./pages/OurCoffee";
import ForYourPleasure from "./pages/ForYourPleasure";
import OneOurCoffee from "./pages/OneOurCoffee";
import Layout from "./components/Layout";
import OneYourPleasure from "./pages/OneYourPleasure";
import accountContext from "./context/Account/AccountContext";
import languageContext from "./context/Language/languageContext";
import AccountState from "./context/Account/AccountState";

function App() {
  const [myAccount, setMyAccount] = useState(500);
  const [myLanguage, setMyLanguage] = useState("EN");
  const [mySecondAccount, setMySecondAccount] = useState(700);
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
          path: "foryourpleasure/:id",
          element: <OneYourPleasure></OneYourPleasure>,
        },
        {
          path: "ourcoffee/:id",
          element: <OneOurCoffee></OneOurCoffee>,
        },
      ],
    },
  ]);
  return (
    <languageContext.Provider
      value={{ language: myLanguage, changeLanguage: setMyLanguage }}
    >
      <AccountState>
        <RouterProvider router={routerPath}></RouterProvider>
      </AccountState>
    </languageContext.Provider>
  );
}

export default App;
