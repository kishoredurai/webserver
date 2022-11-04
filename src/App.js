import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
     {routerList.map((route,i) => (
       <Route key={i} path={route.path} element={route.element} />
     ))}
    </Routes>
    </BrowserRouter>
    </>
   );
}



const routerList = [
  {
    path:"/",
    element:<Login />
  },
  
]
export default App;
