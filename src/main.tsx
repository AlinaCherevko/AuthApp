import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import "../firebase.ts";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <StrictMode>
        <ChakraProvider>
          <App />
          <ToastContainer />
        </ChakraProvider>
      </StrictMode>
    </Provider>
  </BrowserRouter>
);
