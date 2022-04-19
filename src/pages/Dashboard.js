import React from "react";
import BarChartInfo from "../components/BarChartInfo";
// import LinearChartInfo from "../components/LinearChartInfo";
// import RadarChartInfo from "../components/RadarChartInfo";
// import RadialChartInfo from "../components/RadialChartInfo";
// import Cards from "../components/Cards";
import ApiFetch from "../utils/api";
import { urlMockData } from "../utils/urlMockData";

export default function Dashboard() {
  //appeler le contexte pour savoir si on récupère données mockées ou API (contexte est créé au niveau des fichiers utils)
  //créer une variable "url", si données mockées, on stock urlMockData, on met url dans mainData au lieu de urlMockData

  const mainData = ApiFetch(urlMockData.userMainData(12));
  const activityData = ApiFetch(urlMockData.userActivity(12));
  const performanceData = ApiFetch(urlMockData.userPerformance(12));
  const averageSessionData = ApiFetch(urlMockData.userAverageSession(12));

  console.log(mainData);
  console.log(activityData);
  console.log(performanceData);
  console.log(averageSessionData);

  return (
    <div className="dashboard">
      {/* {mainData && <h1>Bonjour {mainData.data.userInfos.firstName}</h1>} */}
      <div className="dashboard_main">
        <div className="singleChart_zone">
          <BarChartInfo />
        </div>
        <div className="multipleCharts_zone">
          {/* <LinearChartInfo />
          <RadarChartInfo />
          <RadialChartInfo /> */}
        </div>
      </div>
      <div className="dashboard_side">{/* <Cards /> */}</div>
    </div>
  );
}
// <div className="dashboard">
//   <h1>Bonjour</h1>
//   <div className="dashboard_main">
//     <div className="singleChart_zone">
//       <BarChartInfo />
//     </div>
//     <div className="multipleCharts_zone">
//       <LinearChartInfo />
//       <RadarChartInfo />
//       <RadialChartInfo />
//     </div>
//   </div>
//   <div className="dashboard_side">
//     <Cards />
//   </div>
// </div>;
