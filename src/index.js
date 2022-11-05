import React, {useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import Auth from './components/login/auth';
import "./index.css";

function Main()
{
  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])

  return (
    <Auth />
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Main />);
