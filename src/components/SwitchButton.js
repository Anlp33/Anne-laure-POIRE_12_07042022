import React from "react";
import { useContext } from "react";
import { DataContext } from "../utils/context";

export default function SwitchButton() {
  const { toggleFetch, fetch } = useContext(DataContext);

  return (
    <button className="switch_button" onClick={() => toggleFetch()}>
      Data from {fetch === "api" ? "api" : "mock"}
    </button>
  );
}
