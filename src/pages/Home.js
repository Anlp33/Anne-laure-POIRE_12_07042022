import React from "react";
import SwitchButton from "../components/SwitchButton";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home_page">
      <div className="userButtons">
        <Link className="user_button" to="dashboard/12">
          Karl
        </Link>
        <Link className="user_button" to="dashboard/18">
          Cecilia
        </Link>
      </div>
      <div>
        <SwitchButton />
      </div>
    </div>
  );
}
