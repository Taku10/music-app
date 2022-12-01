import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from 'react-icons/ri'
import { links } from '../assets/constants'
import {logo} from '../assets'
const NavLinks = () => (
  <div className="mt-10 ">
    {links.map((item) =>
      <NavLink>
        {item.name}
      </NavLink>

    )}
  </div>
)


const Sidebar = () => {


  return (

    <>
      <NavLinks />
    </>

  )
}

export default Sidebar;
