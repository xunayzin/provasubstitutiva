import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
