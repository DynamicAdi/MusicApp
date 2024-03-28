import axios from "axios";
import { useEffect, useState } from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const useSavan = (catogery: string, query?: string, type?: any) => {
  const [data, setData] = useState([]);
  const [error, SetError] = useState(false);
  const [Loading, setLoading] = useState(false);
  let url;
  switch (catogery) {
    case "search":
      url = `?query=${query}`;
      break;
    case "songs":
      url = `/${query}`;
      break;
    case "artists":
      url = `/${query}?songCount=${type}`;
      break;
    case "albums":
      url = `?id=${query}`;
      break;
    case "playlists":
      url = `?id=${query}&limit=${type}`;
      break;
    default:
      break;
  }
  if (type === "lyrics") {
    url = `/${query}/lyrics`;
  }
  const options = {
    method: "GET",
    url: `https://saavn.dev/api/${catogery}${url}`,
    headers: {
      "content-type": "application/json",
    },
  };
  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      if (response.status !== 200) {
        SetError(true);
        setLoading(false);
        alert("Something went wrong");
        return;
      }
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      SetError(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function refetch() {
    setLoading(true);
    SetError(false);
    getData();
  }
  return { data, error, Loading, refetch };
};

export default useSavan;
