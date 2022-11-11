import React from "react";
import "./App.css";
// import Router from "./router";
import { QueryClient } from "@tanstack/react-query";
import  Home from "pages/Home/index";

const queryClient = new QueryClient();
function App() {
  return <Home></Home>;
}

export default App;
