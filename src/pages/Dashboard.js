
import React, { useEffect, useState } from "react";
import Header from "../components/Header"
import Maps from "../components/Maps"
import Trains from "../components/Trains"
import config from "../config/index"

import "./Dashboard.css";





function Dashboard() {
  var data ;

  // get to https://indian-railway.vercel.app/api/trains/types :train type.

  // make a drop down with type value.

  // then https://indian-railway.vercel.app/api/trains$type={trainType}&page=1 (make pagination getch) : reference https://observablehq.com/@xari/paginated_fetch

  //make pagination view fot the list of trains.

  // get request at https://indian-railway.vercel.app/api/trains/${trainnumber} get its source and destination and map in on the map 




  // https://filedn.eu/lHzbYoOuD3z59EGxx7DCIa8/icons/destination-96px.svg
  //https://filedn.eu/lHzbYoOuD3z59EGxx7DCIa8/icons/destination-48px.svg
  //https://filedn.eu/lHzbYoOuD3z59EGxx7DCIa8/icons/source-48px.svg
  //https://filedn.eu/lHzbYoOuD3z59EGxx7DCIa8/icons/source-96px.svg
  //https://filedn.eu/lHzbYoOuD3z59EGxx7DCIa8/icons/train-48px.svg
  // https://filedn.eu/lHzbYoOuD3z59EGxx7DCIa8/icons/train-96px.svg

  const [isLoading, setIsLoading] = useState(false);
  const [trainType, setTrainType] = useState([]);


  const getTrainTypes = async () => {
    setIsLoading(true);
    const JWTToken = localStorage.getItem('token')
    const url = config.endpoint + `train/types`;
    const authConfig = {
      headers: {
         Authorization: "Bearer " + JWTToken
      }
   }
    // console.log("Request sent to: " + url);
    try {
      const response = await axios.get(url,authConfig);
      data = await response.json();
      setTrainType = data.result;
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getTrainTypes();
  }, []);



  return (
    <div >
      <Header/>

    <div className = "contentArea">
      <Maps/>
      <Trains/>
      </div>
      {/* <h1>Hi</h1> */}
      

    </div>
  );
}

export default Dashboard;





