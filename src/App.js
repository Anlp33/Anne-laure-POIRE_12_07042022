import React from "react";
import "./styles/index.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./utils/context";

function App() {
  return (
    <DataProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard/:id" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
