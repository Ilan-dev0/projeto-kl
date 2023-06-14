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
            <img src={logo} alt=''/>
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to='#'>Inicio</Link></li>
            <li><Link to='#'>Dúvidas</Link></li>
            <li><Link to='#'>Planos</Link></li>
            <li><Link to='#'>Resultados</Link></li>
            <li><Link to='#'>Contato</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
