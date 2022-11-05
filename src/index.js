import React from 'react';
import {createRoot} from 'react-dom/client';

function Main()
{
  return <h1>Hello React</h1>
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Main />);
