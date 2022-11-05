import React from 'react';
import {createRoot} from 'react-dom/client';
import Auth from './components/login/auth';
import Login from './components/login/login';
import "./index.css";

function Main()
{
  return (
    <Auth />
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Main />);
