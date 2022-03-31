import React from 'react'
import {NavbarDefault} from '../assets/components/navbar/NavbarDefault'
import { Dashboard } from './Dashboard/Dashboard'
import { Login } from './Login/Login'
// import { FooterDefault } from '../assets/components/footer/FooterDefault'
// import { BrowserRouter } from 'react-router-dom'
// import { Routers } from '../routes/Routers'
// import { Login } from './Login/Login'


export const Layout = () => {
  return (
    <div>
      <Dashboard/>
    </div>
  )
}
