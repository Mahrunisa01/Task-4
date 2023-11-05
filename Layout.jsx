import React from 'react'
import Router from '../../Routes/router'
import Sidebar from '../Sidebar/Sidebar'
import TopNav from '../TopNav/TopNav'
import SigninPage from '../../pages/Signin';
import Dashboard from '../../pages/Dashboard';


function Layout() {
  return (
    <>

    <div className='layout'>
      <Sidebar/>
      <div className="main_layout">
        <TopNav/>
        <div className="content">
          {/* <Router/> */}
          {/* <Dashboard/> */}
          
        </div>
      </div>  
    </div>
  
    </>
    
  );
};

export default Layout;

