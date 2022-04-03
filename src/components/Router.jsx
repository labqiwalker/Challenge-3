import React from 'react'

import { Route, Routes } from "react-router-dom";

import Dashboard from '../pages/DashboardTwo/Dashboard';
import Cars from '../pages/DashboardTwo/Cars';

const Router = () => {
  return (
    <Routes>
        <Route path='/' element= {<Dashboard/>}/>
        <Route path='/list/cars' element= {<Cars/>}/>
    </Routes>
  )
}

export default Router