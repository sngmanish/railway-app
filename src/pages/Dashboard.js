
import React, { useEffect, useState } from "react";
import Header from "../components/Header"




function Dashboard() {

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



  return (
    <div >
      <Header/>

    </div>
  );
}

export default Dashboard;





