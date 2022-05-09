import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import ConvertData from "./mapper/ConvertData";

/**
 * Send custom request using fetch api
 * @param { String } url Url of the mockData/API to fetch
 * @return {object}
 */

export default function ApiFetch(url) {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(ConvertData(data, url));
      })
      .catch((error) => {
        console.log(error);
        navigate("*");
      });
  }, [url, navigate]);
  return data;
}
