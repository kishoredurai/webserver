import React from 'react'
import Iframe from 'react-iframe';

import 'react-toastify/dist/ReactToastify.css'

const Home = () => {
    
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src="https://www.bitsathy.ac.in/assets/images/logo.png" width="200" height="40" className="d-inline-block align-top"
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
      <div class="container-fluid m-0 p-0">

      <div className='videoWrapper' >
        <Iframe url="https://10.10.237.155:6002"
            display="block"
            id="myId"
            width="100%"
            scrolling="auto" 
            height='100%'
            position="absolute"
            sandbox="allow-popups allow-popups-to-escape-sandbox"
            allowFullScreen
            />
    </div>
</div>
  </>
  )
}
export default Home
