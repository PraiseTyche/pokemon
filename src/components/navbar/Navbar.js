import React, {useState} from 'react'
import {Squash as Hamburger} from 'hamburger-react'
import Drawer from './Drawer';
import Backdrop from '../backdrop/Backdrop';

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const activeToggle = ()=>{
    setActive(!isActive);
  }
  return (
    <header className={'navbar'}>
      <div className={'navbar_brand-container'}>
        <h1>[Pokedex.]</h1>
      </div>
      <Hamburger toggled={isActive} toggle={activeToggle} color='#f0dba5'/>
      <Drawer active={isActive} onToggle={activeToggle}/>
      <Backdrop active={isActive} onToggle={activeToggle}/>
    </header>
  )
}

export default Navbar
