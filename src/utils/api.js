import { useState } from "react";
import React from "react";
import { Navigate } from "react-router-dom";


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
      .catch((error) => {
        console.log(error);
        // if (error.response.status === 404 || url === undefined) {
        //   return <Navigate to="*"></Navigate>;
        // }
      } );
  }, [url]);
  
  return data;
}
