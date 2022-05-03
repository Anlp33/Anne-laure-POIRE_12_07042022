import { useState } from "react";
import React from "react";

/**
 * Send custom request using fetch api
 * @param { String } url Url of the mockData/API to fetch
 * @return {object} 
 */

export default function ApiFetch(url) {
  const [data, setData] = useState();

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return data;
}
