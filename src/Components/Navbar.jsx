import React, {useState} from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    
    const [nav,setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);

  return (   

    <nav className={nav ? "nav active" :"nav"}>
        <a href='#main' className='logo'>
            <img src={logo} alt='' style={{ width: '150px', height: 'auto', padding: '10px'}}/>
        </a>
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li style={{cursor:'pointer'}}><a href='#main'>Inicio</a></li>
            <li style={{cursor:'pointer'}}><a href='#name'>Dúvidas</a></li>
            <li style={{cursor:'pointer'}}><a href='#plan'>Planos</a></li>
            <li style={{cursor:'pointer'}}><a href='#results'>Resultados</a></li>
            <li style={{cursor:'pointer'}}><a href='#footer'>Contato</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
