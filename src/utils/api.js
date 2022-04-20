import { useState } from "react";
import React from "react";

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
