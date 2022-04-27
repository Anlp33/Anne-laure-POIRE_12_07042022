import React, { useContext } from "react";
import BarChartInfo from "../components/BarChartInfo";
import LinearChartInfo from "../components/LinearChartInfo";
import RadarChartInfo from "../components/RadarChartInfo";
import RadialChartInfo from "../components/RadialChartInfo";
import Cards from "../components/Cards";
import ApiFetch from "../utils/api";
import { urlMockData } from "../utils/urlMockData";
import { urlAPI } from "../utils/urlAPI";
import { useParams } from "react-router-dom";
import { DataContext } from "../utils/context";

export default function Dashboard() {
  //appeler le contexte pour savoir si on récupère données mockées ou API (contexte est créé au niveau des fichiers utils)
  //créer une variable "url", si données mockées, on stock urlMockData, on met url dans mainData au lieu de urlMockData
  const { id } = useParams();

  const { fetch } = useContext(DataContext);

  const url = fetch === "api" ? urlAPI : urlMockData;

  const mainData = ApiFetch(url.userMainData(id));
  const activityData = ApiFetch(url.userActivity(id));
  const performanceData = ApiFetch(url.userPerformance(id));
  const averageSessionData = ApiFetch(url.userAverageSession(id));

  return (
    <div className="dashboard">
      <div className="dashboard_header">
        {mainData && <h1>Bonjour {mainData.data.userInfos.firstName}</h1>}
      </div>
      <div className="dashboard_main">
        {activityData && (
          <div className="dashboard_charts">
            {/* {<BarChartInfo data={activityData.data.sessions} />}

            {averageSessionData && (
              <LinearChartInfo
                data={averageSessionData.data.sessions}
                day={averageSessionData.data.sessions.day}
                sessionLength={averageSessionData.data.sessions.sessionLength}
                key={averageSessionData.data.sessions}
              />
            )}
            {performanceData && (
              <RadarChartInfo data={performanceData.data.data} />
            )} */}
            {mainData && <RadialChartInfo data={mainData.data} />}
          </div>
        )}
        <div className="dashboard_side">
          {mainData && <Cards {...mainData.data.keyData} />}
        </div>
      </div>
    </div>
  );
}
