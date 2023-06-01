import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/GlobalStyles.ts";
import Router from "./routes/Router";
import { RouterProvider } from "react-router-dom";
import AuthRegisterProvider from "./context/AuthRegister/AuthRegister.context.tsx";
import ProductsProvider from "./context/Products/Products.context.tsx";
import CostumersProvider from "./context/Costumers/Costumers.context.tsx";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthRegisterProvider>
      <ProductsProvider>
        <CostumersProvider>
          <GlobalStyles />
          <RouterProvider router={Router} />
          <ToastContainer autoClose={3000} />
        </CostumersProvider>
      </ProductsProvider>
    </AuthRegisterProvider>
  </React.StrictMode>
);
