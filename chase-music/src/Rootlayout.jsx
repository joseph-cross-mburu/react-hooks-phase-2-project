import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'


const Rootlayout = () => {
  return (
    <div>
        <header>
            <nav>
                <h1>chase music</h1>
                <NavLink to={"/"}>Dashboard</NavLink>
                <NavLink to={'./components/SearchMusic'}>SearchMusic</NavLink>
                <NavLink to={'./components/SideBar'}>SideBar</NavLink>
                <NavLink to={'./components/About'}>About</NavLink>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Rootlayout
