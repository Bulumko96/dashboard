import React from 'react'
import './styles/Sidebar.css'
import { SidebarData } from '../Data/Data'

const Sidebar = () => {
  return (
    <div className="Sidebar">
        <div className="logo">
            <img src="" alt="" />
            <span>
              Shop
            </span>
        </div>
        <div className="menu">
          {Sidebar.map((item, index) => {
              return(
                <div className="menu-item">
                  <item.icon/>
                  <span>
                    {item.heading}
                  </span>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default Sidebar