import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import classes from './Navbar.module.css';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${classes.header} ${isSticky ? classes.sticky : undefined}`}
    >
      <div className={classes.innerContainer}>
        <Link>
          <img src={logo} alt="lymperi logo" className={classes.logo} />
        </Link>
        <nav className={classes.navBar}>
          <ul className={classes.navList}>
            <li>Portfolio</li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                About
              </NavLink>
            </li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
