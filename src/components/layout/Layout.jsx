import React from 'react'

import Sidebar from '../sidebar/Sidebar'
import Router from '../Router'

import { BrowserRouter, Route } from "react-router-dom";


const Layout = () => {
  return (
    <BrowserRouter>
      <Route render={(props) => (
        <div className='layout'>
          <Sidebar {...props}/>
          <div className="layout_content">
            <div className="layout_content_main">
              <Router/>
            </div>
          </div>
        </div>
      )} />
    </BrowserRouter>
  )
}

export default Layout
