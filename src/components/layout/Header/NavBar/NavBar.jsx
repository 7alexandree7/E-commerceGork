
import './NavBar.css'
import { useState } from 'react'

const NavBar = () => {

  const [moblieMenu, setMoblieMenu] = useState(false)

  return (
    <section className='header'>
      <div className='container d_flex'>

        <div className='categories d_flex'>
          <span className='fa-solid fa-border-all'></span>
          <h4>Categories <i className='fa fa-chevron-down'></i></h4>
        </div>

        <nav className='navlink'>
          <ul className={moblieMenu ? 'nav-links-MoblieMenu' : 'link f_flex capitalize'}>
            <li>Home</li>
            <li>Pages</li>
            <li>User Account</li>
            <li>Vendor Account</li>
            <li>Track My Order</li>
            <li>Contact</li>
          </ul>

          <button onClick={() => setMoblieMenu(!moblieMenu)} className='toogle'>
            {moblieMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
          </button>
        </nav>

      </div>
    </section>
  )
}

export default NavBar
