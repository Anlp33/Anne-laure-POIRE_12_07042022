import React from "react";
import { useContext } from "react";
import { DataContext } from "../utils/context";

/**
 * This component creates the switch Button between Api and mock data
 * @returns {jsx} react component
 */

export default function SwitchButton() {
  const { toggleFetch, fetch } = useContext(DataContext);

  return (
    <button className="switch_button" onClick={() => toggleFetch()}>
      Data from {fetch === "api" ? "api" : "mock"}
    </button>
  );
}
