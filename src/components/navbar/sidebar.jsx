import { useState } from "react";
import * as bi from 'react-icons/bi';
import * as ai from 'react-icons/ai';
import sidebarData from "./sidebarData";
import {NavLink} from "react-router-dom";

export default function SideBar()
{
    const [isOpen, setIsOpen] = useState(false);

    return(
        <section>
            {isOpen ? 
            <button onClick={() => setIsOpen(!isOpen)} className="top-5 right-5 fixed w-fit z-10">
                <ai.AiFillCloseCircle size={32} className = "text-white"/>
            </button>
            : 
            <div className="top-0 left-0 shadow-md fixed z-10 my-bg-lb w-full flex justify-between px-3">

                <div className="lg:w-[6%] w-[12%]">
                    <img src="./images/logo.png" className="w-full" />
                </div>
                
                <button onClick={() => setIsOpen(!isOpen)} className="">
                    <bi.BiMenu size={32} className="my-text-black" />
                </button>
            </div>
            }
            <div className= {`top-0 fixed right-0 bg-blue-500 h-screen w-[80vw] lg:w-[20vw] shadow-lg py-10 text-white ${isOpen? "translate-x-0":"translate-x-full"} ease-in-out duration-300`}>

            <div className="flex justify-center">
                <img src="./images/logo2.png" className="w-[50%]" />
            </div>
            <div className="mt-5">
                {sidebarData.map((item, index) => {
                    return(
                        <NavLink onClick={() => {setIsOpen(!isOpen)}} to={item.link} key={index} className={({ isActive }) => (isActive ? "p-3 flex items-center border-b border-b-blue-900 cursor-pointer bg-blue-900" : "p-3 flex items-center border-b border-b-blue-400 cursor-pointer hover:bg-blue-400 hover:duration-200")} activeclassname="bg-blue-400">
                            {item.icon}
                            <p className="ml-2">{item.name}</p>
                        </NavLink>
                    )
                })}

                <button className= "w-full p-3 flex items-center border-b border-b-blue-400 cursor-pointer hover:bg-blue-400 hover:duration-200">
                    {<bi.BiLogOut size={24} />}
                    <p className="ml-2">Logout</p>
                </button>
            </div>
               
            </div>
        </section>
    )
}