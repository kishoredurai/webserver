import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Frame from '../iframe/main';
import Loader from '../Loader';
import SideBar from '../navbar/sidebar';
import Login from './login';

export default function Auth()
{
    const[isLogged, setLogged] = useState(null);
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("tokens"));
        if(user == null) setLogged(false);
        else setLogged(true);
    })

    if(isLogged === null)
    {
       return <Loader />     
    }
    
    else if(!isLogged)
    {
        return (
        <Router>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>);
    }
    return (
        <Router>
            <section className="flex flex-col items-center justify-center min-h-screen py-2">
                <SideBar />
                <section className="mt-[8vh] md:mt-[8vh] lg:mt-[12vh] w-full">
                    <Routes>
                        <Route path='/' element={<Frame />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </section>
            </section>
    </Router>);
}