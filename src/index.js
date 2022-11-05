import React from 'react';
import {createRoot} from 'react-dom/client';
import Login from './components/login/login';
import "./index.css";

function Main()
{
  return (
    <Login />
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Main />);
