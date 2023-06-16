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
        <Link to='#' className='logo'>
            <img src={logo} alt='' style={{ width: '150px', height: 'auto', padding: '10px'}}/>
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li style={{cursor:'pointer'}}><Link to='#'>Inicio</Link></li>
            <li style={{cursor:'pointer'}}><Link to='#'>Dúvidas</Link></li>
            <li style={{cursor:'pointer'}}><Link to='#'>Planos</Link></li>
            <li style={{cursor:'pointer'}}><Link to='#'>Resultados</Link></li>
            <li style={{cursor:'pointer'}}><Link to='#'>Contato</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
