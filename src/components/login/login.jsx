//! Need to replace client ID
import React from 'react';
import GoogleLogin from 'react-google-login';
export default function Login()
{
  //! -----  THIS LOGS USER DETAILS ON GOOGLE LOGIN ----
  function responseGoogle(response)
  {
    console.log(response);
    localStorage.setItem("tokens", JSON.stringify(response));
    window.location.reload();
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full overflow-hidden">
        <div className="hidden sm:block">
            <img src = "https://www.unisys.com/siteassets/images/glossary/images/cloudcomputing-og.jpg" className="w-full h-full object-cover" alt="Login Cover" />    
        </div> 

        <div className="flex flex-col justify-center items-center">
            <div className="w-[30%]">
                <img src = "./images/logo.png" alt="logo"/>
            </div>

            <div className="w-[80%] sm:w-[60%] flex justify-center mt-5 p-3">
              
            <GoogleLogin
                clientId="--- GOOGLES CLIENT ID HERE ---"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            </div>
        </div>

    </section>
  )
}