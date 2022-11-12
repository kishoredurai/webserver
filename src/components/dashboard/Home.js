import React from 'react'
import Iframe from 'react-iframe';
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css'
import { Navigate } from 'react-router-dom';
import { useEffect } from "react";

const Home = () => {
 
  const [user, setUser] = useState("");

  useEffect(() => {
    let usr = JSON.parse(localStorage.getItem("tokens"));
    var link = 'http://61.1.180.254/remote/'+usr.$oid+'?resize=remote&path='+usr.$oid+'/websockify'
    setUser(link);

},[]);
    
  if (!localStorage.getItem("tokens")) return <Navigate to="/" />;

  return (
    <>

      <div className="container-fluid m-0 p-0">
   

       <Iframe url={user}
            display="block"
            id="myId"
            className="min-h-[110vh] min-w-[100%]"
            width="100%"
            scrolling="auto" 
            height='100%'
            position="absolute"
            allowFullScreen="fullscreen"
            /> 
    </div>
      
  </>
  )
}
export default Home
