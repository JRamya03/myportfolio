import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Title} from './navbar/Title';
import {About} from './navbar/About';
import { Resume } from "./navbar/Resume";
import { Project } from "./navbar/Project";
import { Contact } from "./navbar/Contact";
// import {useSelector} from 'react-redux'


export const Routing =()=>{

    return(
        <div>
           <BrowserRouter>
             <Routes>
                <Route path='/' element={<Title/>}> </Route>
                <Route path='/about' element={<About/>}>  </Route>
                <Route path='/resume' element={<Resume/>}> </Route>
                <Route path='/project' element={<Project/>}> </Route>
                <Route path='/contact' element={<Contact/>}> </Route>
             </Routes>
           </BrowserRouter>
        </div>

    )
}