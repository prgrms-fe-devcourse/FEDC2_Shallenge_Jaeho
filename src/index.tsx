import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <GlobalStyles />
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
