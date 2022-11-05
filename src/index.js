import React from 'react';
import {createRoot} from 'react-dom/client';
import "./index.css";

function Main()
{
  return <h1 className='bg-red-300 text-green-500'>Hello React</h1>
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Main />);
