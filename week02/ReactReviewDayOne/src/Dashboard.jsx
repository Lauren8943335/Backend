import React from 'react'
import ViteLogo from './viteSVG'
import './App.css'
import Dashboard from '/.Dashboard'


const Dashboard = () => {
  return (
    <div id="Dashboard" >
        console.log{("props", props)}
        <p>
            {props.stuff                                          }
            </p>
        
        </div>
  )
}

export default Dashboard