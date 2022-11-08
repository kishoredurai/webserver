import React from 'react'
import Iframe from 'react-iframe';
import { Navigate } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css'



const Home = () => {
  let openFrame = () => {
    let iframe = document.createElement("iframe");
    iframe.src = "https://www.bitsathy.ac.in/embed";
    iframe.frameBorder = "0";
    iframe.id = "iframe";
    iframe.style.position = "absolute";
    iframe.style.zIndex = "999";
    iframe.style.height = "100%";
    iframe.style.width = "100%";
    iframe.style.top = "0";
    iframe.style.backgroundColor = "white";
    iframe.style.border = "none";
    document.body.prepend(iframe);
    document.body.style.overflow = "hidden";
  };
    
  if (!localStorage.getItem("tokens")) return <Navigate to="/" />;

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" >
          <img src="images/logo.png" width="200" height="40" className="d-inline-block align-top ml-3"
            alt="" />
            </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mt-2 mt-lg-0">
          
           
          </ul>
    
          <div className="mx-auto ">
    
          </div>
    
          <form className="d-flex">
            <h6 className='pt-2 mr-2 px-1'>kishore.ct19@bitsathy.ac.in</h6>
            <div className='px-3'><button className="btn btn-outline-success px-" type="submit">Logout</button></div>
      
    </form>
        </div>
      </nav>
      <div className="container-fluid m-0 p-0">

      <button onClick={() => openFrame()}>Open IFRAME</button>
      {/* <div className='videoWrapper' >
        <Iframe url="https://www.google.com/"
            display="block"
            id="myId"
            width="100%"
            scrolling="auto" 
            height='100%'
            position="absolute"
            />
    </div> */}
</div>
  </>
  )
}
export default Home
