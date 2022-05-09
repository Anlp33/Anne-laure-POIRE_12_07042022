import React, { useContext } from "react";
import yogaIcon from "../assets/iconYoga.svg";
import swimIcon from "../assets/iconSwim.svg";
import bicycleIcon from "../assets/iconBicycle.svg";
import weightIcon from "../assets/iconWeight.svg";
import BarChartComponent from "../components/BarChartComponent";
import LinearChartComponent from "../components/LinearChartComponent";
import RadarChartComponent from "../components/RadarChartComponent";
import PieChartComponent from "../components/PieChartComponent";
import Cards from "../components/Cards";
import ApiFetch from "../utils/api";
import { urlMockData } from "../utils/urlMockData";
import { urlAPI } from "../utils/urlAPI";
import { useParams } from "react-router-dom";
import { DataContext } from "../utils/context";

export default function Dashboard() {
  //get the id from the URL
  const { id } = useParams();

  const { fetch } = useContext(DataContext);
  const url = fetch === "api" ? urlAPI : urlMockData;

  console.log(url.userMainData(id));

  //Variables which stock fetch data from different url(mockdata or api url) and user id
  const mainData = ApiFetch(url.userMainData(id));
  const activityData = ApiFetch(url.userActivity(id));
  const performanceData = ApiFetch(url.userPerformance(id));
  const averageSessionData = ApiFetch(url.userAverageSession(id));

  console.log(mainData);

  return (
    <div className="main">
      <nav className="navbar_vertical">
        <ul>
          <li>
            <img src={yogaIcon} alt="Yoga icon" className="NavBar_icons" />
          </li>
          <li>
            <img src={swimIcon} alt="Swimming icon" className="NavBar_icons" />
          </li>
          <li>
            <img
              src={bicycleIcon}
              alt="Bicycle icon"
              className="NavBar_icons"
            />
          </li>
          <li>
            <img src={weightIcon} alt="Weight icon" className="NavBar_icons" />
          </li>
        </ul>
        <p>Copyright, SportSee 2020</p>
      </nav>
      <div className="dashboard">
        <div className="dashboard_header">
          {mainData && (
            <h1>
              Bonjour{" "}
              <span className="name"> {mainData.userInfos.firstName}</span>
            </h1>
          )}
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className="dashboard_main">
          {activityData && (
            <div className="dashboard_charts">
              {<BarChartComponent data={activityData.sessions} />}

              {averageSessionData && (
                <LinearChartComponent data={averageSessionData.sessions} />
              )}
              {performanceData && (
                <RadarChartComponent data={performanceData.data} />
              )}
              {mainData && <PieChartComponent data={mainData} />}
            </div>
          )}
          <div className="dashboard_side">
            {mainData && <Cards {...mainData.keyData} />}
          </div>
        </div>
      </div>
    </div>
  );
}
