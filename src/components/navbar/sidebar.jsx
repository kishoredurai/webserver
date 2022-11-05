import { useState } from "react";
import * as bi from 'react-icons/bi';
import * as ai from 'react-icons/ai';
import sidebarData from "./sidebarData";
import {NavLink} from "react-router-dom";
import { useEffect } from "react";

export default function SideBar()
{
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState({});
    
    useEffect(() => {
        let usr = JSON.parse(localStorage.getItem("tokens"));
        setUser(usr.profileObj);
    },[]);

    function logout()
    {
        localStorage.removeItem("tokens");
        window.location.reload();
    }

    return(
        <section>
            {isOpen ? 
            <button onClick={() => setIsOpen(!isOpen)} className="top-5 right-5 fixed w-fit z-10">
                <ai.AiFillCloseCircle size={32} className = "text-blue-900"/>
            </button>
            : 
            <div className="top-0 left-0 shadow-lg absolute z-10 my-bg-lb w-full flex justify-between px-3">

                <div className="lg:w-[6%] w-[12%] p-1">
                    <img src="./images/logo.png" className="w-full" />
                </div>
                
                <button onClick={() => setIsOpen(!isOpen)} className="">
                    <bi.BiMenu size={32} className="my-text-black" />
                </button>
            </div>
            }
            <div className= {`top-0 fixed right-0 bg-white h-screen w-[80vw] lg:w-[20vw] shadow-lg py-10 text-black ${isOpen? "translate-x-0":"translate-x-full"} ease-in-out duration-300`}>

            <div className="flex justify-center">
                <img src="./images/logo.png" className="w-[50%]" />
            </div>
            <div className="mt-6 p-3 flex-col justify-center">
                <p className="p-1 font-bold text-xl">User Details</p>
                <p className="text-sm mb-2 font-semibold">{user.email}</p>
                <div className="flex justify-start items-center"> 
                    <img src={user.imageUrl} className="w-[18%] rounded-[50%]" />
                    <p className="ml-2">{user.name}</p>
                </div>
                </div>
            <div className="mt-5">
                {sidebarData.map((item, index) => {
                    return(
                        <NavLink onClick={() => {setIsOpen(!isOpen)}} to={item.link} key={index} className={({ isActive }) => (isActive ? "p-3 flex items-center border-b border-b-black text-white cursor-pointer bg-blue-900" : "p-3 flex items-center border-b border-b-slate-600 cursor-pointer hover:bg-slate-200 hover:duration-200")} activeclassname="bg-blue-400">
                            {item.icon}
                            <p className="ml-2">{item.name}</p>
                        </NavLink>
                    )
                })}

                <button onClick={() => logout()} className= "w-full p-3 flex items-center border-b border-b-black cursor-pointer hover:bg-slate-200 hover:duration-200">
                    {<bi.BiLogOut size={24} />}
                    <p className="ml-2">Logout</p>
                </button>
            </div>
               
            </div>
        </section>
    )
}