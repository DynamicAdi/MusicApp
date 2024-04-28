import axios from "axios";
import React, {useState, useEffect} from "react";

function homePage() {
    const [data, setData] = useState([]);
    const [error, SetError] = useState(false);
    const [Loading, setLoading] = useState(false);
    const options = {
        method: "GET",
        url: `https://jiosaavn-api-ts.vercel.app/modules`,
        headers: {
            "content-type": "application/json",
        },
    }
    const homePageData = async () => {
        setLoading(true);
        try {
            const request = await axios.request(options);
            if (request.status !==200) {
                setLoading(false);
                SetError(true);
            }
            setData(request.data.data);
            setLoading(false);
        }
        catch (error) {
            SetError(true);
            setLoading(false);
          } 
          finally {
            setLoading(false);
          }
    }
    useEffect(() => {
        homePageData();
      }, []);
    
      function refetch() {
        setLoading(true);
        SetError(false);
        homePageData();
      }
      return { data, error, Loading, refetch };
}

export default homePage;