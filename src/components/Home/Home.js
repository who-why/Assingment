import React from 'react'
import './Home.css'
import Filter from '../Filter/Filter'
import Table from '../Table/Table'
import Legend from '../Legend/Legend'
import Summary from '../Summary/Summary'


const Home = () => {
  return (
    <div className='home'>
         <div className="left">
              <Filter/>
              <Table/>
              <Legend/>
         </div>
         <div className="right">
                 <div className="table-number">
                         <h2>Table Number 8</h2>
                         <div className="relez">
                               <button>RELEASE</button>
                               <p>X</p>
                         </div>
                 </div>
                 <Summary/>
         </div>
    </div>
  )
}

export default Home
