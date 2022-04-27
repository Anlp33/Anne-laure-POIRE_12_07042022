import { createContext } from "react";
import { useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [fetch, setFetch] = useState("api");
  const toggleFetch = () => {
    setFetch(fetch === "api" ? "mock" : "api");
  };

  return (
    <DataContext.Provider value={{ fetch, toggleFetch }}>
      {children}
    </DataContext.Provider>
  );
};