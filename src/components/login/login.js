import React, {  useEffect } from 'react'
import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'
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

  const clientId ='438729059572-85crmeed3iuolevullovtuboaqhgoh86.apps.googleusercontent.com'

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
       <>
      {/* google login */}
      <div
        id="g_id_onload"
        data-client_id="438729059572-85crmeed3iuolevullovtuboaqhgoh86.apps.googleusercontent.com"
        data-auto_select="false"
        data-login_uri="http://localhost:3000/"
      ></div>

      {/* Login Code */}

     
          {/* Google Login Button*/}

      	
	<div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-pic js-tilt" data-tilt>
					<img src="images/img-01.png" alt="IMG"/>
				</div>

				<form className="login100-form validate-form">
					<span className="login100-form-title">
						Students Login
					</span>

					
					<div className="container-login100-form-btn">
						
                    <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
      />
					</div>

					<div className="text-center p-t-12">
						
						
					</div>

					<div className="text-center p-t-136">
						
					</div>
				</form>
			</div>
		</div>
	</div>
	<script src="../vendor/jquery/jquery-3.2.1.min.js"></script>
    <script src="../vendor/bootstrap/js/popper.js"></script>
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="../vendor/select2/select2.min.js"></script>
    <script src="../vendor/tilt/tilt.jquery.min.js"></script>
   
    

<ToastContainer />

    </>
    
  )
}
export default Login
