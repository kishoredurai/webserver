import React, {  useEffect } from 'react'
import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'
import { useNavigate } from "react-router-dom";

import './Login.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  let navigate = useNavigate();
  const routeChange = (page) => {
    navigate(page);
  };

    const notifydanger = () =>
    toast.error("Invalid Email Id !!! contact Administrator", {
      position: toast.POSITION.TOP_RIGHT,
    });

  // Google login check
 
  window.onbeforeunload = function (e) {
    gapi.auth2.getAuthInstance().signOut()
  }

  const clientId ='852762241490-gr45nghc45rkvjp5bs3uqvr4q0qkp80h.apps.googleusercontent.com'

  useEffect(() => {
    const initClient = () => {
      var auth2 = gapi.auth2.getAuthInstance()
      gapi.auth2.init({
        clientId: clientId,
        scope: '',
      })
    }
   
      gapi.load('client:auth2', initClient)
    
  })
  const onSuccess = (res) => {
    console.log(res.profileObj)
    console.log(res.profileObj.email)
    // const myArray = res.profileObj.email.split('.')
    // let a = myArray[1][0] + myArray[1][1]
    // login_check(res.profileObj.email)
    localStorage.setItem("tokens", JSON.stringify(res));
    routeChange('/home')
    notifydanger();
    // window.open("https://www.google.com/", "_self");

    // d=data;
  }

  const onFailure = (err) => {
    console.log('failed', err)
  }


// Google login check function

const login_check = (event) => {
  // alert(event)

  fetch('http://localhost:5000/login/user', {
    method: 'POST',
    body: JSON.stringify({
      user: event,
    }),
    headers: {
      'Content-type': 'application/JSON',
    },
  })
    .then((res) => res.json())
    .then((gdata) => {
      if (gdata) {
        // localStorage.setItem("loggedin", data["id"]);
        window.open("google.com", "_blank");
        alert('hi')
        gapi.auth2.getAuthInstance().signOut()

        //localStorage.setItem("loggedname", data["id"]);
      } else {
        notifydanger();
        window.open("google.com", "_blank");

      }
    })
}
  return  (
      
     

<div className='login-page'>
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title"><img src='images/bit_cloud_logo.png' width={250}/></h3>
          <div className="form-group mt-3">
            <h3 className="Auth-form-title">BIT CLOUD DASHBOARD</h3>
          </div>
         
          <div className="d-grid pt-3 gap-2 mt-3">
            <div className='card border-primary'>
            <div
        id="g_id_onload"
        data-client_id="852762241490-gr45nghc45rkvjp5bs3uqvr4q0qkp80h.apps.googleusercontent.com"
        data-auto_select="false"
        data-login_uri="http://localhost:3000/"
      ></div>
            <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
      />
            </div>
         
          </div>
          <p className="mx-auto pt-5 text-center">
            powerd by <a style={{color:'red'}}>Cloud Lab</a>
          </p>
        </div>
      </form>
    </div>
 

    <ToastContainer />

    </div>


    
  )
}
export default Login
