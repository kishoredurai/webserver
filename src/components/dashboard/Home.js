import React from "react";
import Iframe from "react-iframe";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

import { useNavigate } from 'react-router-dom'


const Home = () => {


    /// navigate function

    let navigate = useNavigate()

    // page navigator
  
    const routeChange = (page) => {
      navigate(page)
    }
  




  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {

    let usr = JSON.parse(localStorage.getItem("tokens"));
    if(usr)
    {
    var link =
      "http://61.1.180.254/remote/" +
      usr.$oid +
      "?resize=remote&path=" +
      usr.$oid +
      "/websockify";

    setEmail(usr.email);
    setUser(link);
    }
    else
    {
      routeChange('/home');
    }
  }, []);

// logout function

function logout()
{
    localStorage.removeItem("tokens");
    // routeChange('/home');
     window.location.reload();
} 





  if (!localStorage.getItem("tokens")) return <Navigate to="/" />;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            src="images/logo.png"
            width="180"
            height="30"
            className="d-inline-block align-top ml-3"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mt-2 mt-lg-0"></ul>

          <div className="mx-auto "></div>

          <form className="d-flex">
            <h6 className="pt-2 mr-2 px-1">{email}</h6>
            <div className="px-3">
              <button  onClick={() => logout()} className="btn btn btn-outline-success px-" type="submit">
                Logout
              </button>
            </div>
          </form>
        </div>
      </nav>

      <div className="container-fluid m-0 p-0">
        <Iframe
          url={user}
          display="block"
          id="myId"
          className="min-h-[110vh] min-w-[100%]"
          width="100%"
          scrolling="auto"
          height="100%"
          position="absolute"
          allowFullScreen="fullscreen"
        />
      </div>
    </>
  );
};
export default Home;
