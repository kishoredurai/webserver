
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './components/login/Login';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/dashboard/Home";
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
