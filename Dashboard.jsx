import React from 'react'
import SingleCard from '../components/reuseable/SingleCard';
import "../styles/dashboard.css";
import Sidebar from '../components/Sidebar/Sidebar';
import TopNav from '../components/TopNav/TopNav';
import Booking from './Booking';


import { ResponsiveContainer, BarChart , Bar , XAxis , Tooltip } from 'recharts';

import staticsData from '../assets/dummy-data/statistics'
import RecommendFlowerCard from '../components/UI/recommendFlowerCrad';
import recommendFlowers from '../assets/dummy-data/recommendFlowers';



const FlowerObj = {
  title: "Total Flowers",
  totalNumber: 2500,
  icon: "ri-store-2-fill",
};

const tripObj = {
  title: "Daily Sale",
  totalNumber: 90,
  icon:"ri-wallet-3-line",
};

const clientObj = {
  title: "Clients Annually",
  totalNumber: "1k",
  icon: "ri-user-line",
};

const FlowerVarity = {
  title: "Flower Varity",
  totalNumber: 50,
  icon: "ri-plant-line",
};

function Dashboard() {
  return (
    <>
    <div className='layout'>
      <Sidebar/>
      <div className="main_layout">
        <TopNav/>
        <div className="content">
          {/* <Router/> */}
          {/* <Dashboard/> */}
          <Booking/>
          
        </div>
      </div>  
    </div>

    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={FlowerObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={FlowerVarity} />
        </div>
        <div className="statics">
          <div className="stats">
            <h3 className='stats__title'>Statistics</h3>
            <ResponsiveContainer width='100%' >
              <BarChart data={staticsData}>
                <XAxis dataKey='name' stroke="#2884ff"/>
                <Bar dataKey='Stats' stroke='#2884ff' fill='#2884ff'/>
                <Tooltip wrapperClassName='tooltip__style' cursor={false}/>
              </BarChart>
            </ResponsiveContainer>
          </div>

         
          <div className="stats">
          <h3 className='stats__title'>Selling Rate</h3>
            <ResponsiveContainer width='100%' >
              <BarChart data={staticsData}>
                <XAxis dataKey='name' stroke="#2884ff"/>
                <Bar dataKey='Stats' stroke='#2884ff' fill='#2884ff' barSize={30}/>
                <Tooltip/>

              </BarChart>
            </ResponsiveContainer>
          </div>

          </div>

          <div className="recommend__cars-wrapper">
              {
                recommendFlowers.map(item=> <RecommendFlowerCard  item={item} key={item.id}/>  )
              }
        </div>
          
       
      </div>
    </div>
    </>
  )
}


export default Dashboard
