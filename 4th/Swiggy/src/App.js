import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Cart from "./Pages/Cart";
import RestaurantPage from "./Pages/RestaurantPage";
import { useEffect } from 'react';
import UserContext from "./Context/UserContext.jsx";
window.React = React; // 👈 expose React globally for DevTools
import { Provider } from "react-redux";
import appStore from "./Redux/appStore.js";

const Grocery = lazy(() => import("./Pages/Grocery.jsx"));



const App = () => {
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const data = {
      name: "Zeeshan Afzal Khan"
    }
    setUserName(data.name);
  }, []);


  return (
   <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} future={{ v7_startTransition: true }} />
  </React.StrictMode>
);
