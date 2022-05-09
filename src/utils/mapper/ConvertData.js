import Activity from "../classes/Activity";
import MainData from "../classes/MainData";
import Performance from "../classes/Performance";

const ConvertData = (result, url) => {
  if (url.includes("performance")) {
    return new Performance(
      result.data.userId,
      result.data.kind,
      result.data.data
    );
  }
  if (url.includes("activity")) {
    return new Activity(result.data.userId, result.data.sessions);
  }
  if (url.includes("average-sessions")) {
    return new Activity(result.data.userId, result.data.sessions);
  }
  return new MainData(
    result.data.id,
    result.data.userInfos,
    result.data.todayScore,
    result.data.score,
    result.data.keyData
  );
};

export default ConvertData;
