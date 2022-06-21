import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyles from "./styles/GlobalStyles";
import App from "./App";

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
