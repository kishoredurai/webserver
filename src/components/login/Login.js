import React, {  useEffect } from 'react'
import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'

import './Login.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {


    const notifydanger = () =>
    toast.error("Invalid Email Id !!! contact Administrator", {
      position: toast.POSITION.TOP_RIGHT,
    });

  // Google login check
 
  window.onbeforeunload = function (e) {
    gapi.auth2.getAuthInstance().signOut()
  }

  const clientId ='397488234430-ag4re2u25gv1nr9lho3relhd581lb3nf.apps.googleusercontent.com'

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
   
   
    login_check(res.profileObj.email)

  }

  const onFailure = (err) => {
    notifydanger();

  }


// Google login check function

const login_check = (event) => {
  // alert(event)

  fetch('http://localhost:5000/api/signin', {
    method: 'POST',
    body: JSON.stringify({
      email: event,
    }),
    headers: {
      'Content-type': 'application/JSON',
    },
  })
    .then((res) => res.json())
    .then((gdata) => {
      if (gdata) {
        // window.open("google.com", "_self");     
        var link = 'remote/'+gdata._id.$oid+'?path='+gdata._id.$oid+'/websockify'
        console.log(link)
        window.open(link, "_self"); 
        gapi.auth2.getAuthInstance().signOut()

      } else {
        notifydanger();

      }
    })
}




  return  (
      
     

<div className='login-page'>
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title"><img src='images/bit_cloud_logo.png' width={250} alt="logo"/></h3>
          <div className="form-group mt-3">
            <h3 className="Auth-form-title">BIT CLOUD DASHBOARD</h3>
          </div>
         
          <div className="d-grid pt-3 gap-2 mt-3">
            <div className='card border-primary'>
            <div
        id="g_id_onload"
        data-client_id="397488234430-ag4re2u25gv1nr9lho3relhd581lb3nf.apps.googleusercontent.com"
        data-auto_select="false"
        data-login_uri="http://localhost/"
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
            powered by <a style={{color:'red'}}>Cloud Lab</a>
          </p>
        </div>
      </form>
    </div>
 

    <ToastContainer />

    </div>


    
  )
}
export default Login
