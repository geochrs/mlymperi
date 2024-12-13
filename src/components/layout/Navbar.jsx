import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import classes from './Navbar.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');
  const [isSticky, setIsSticky] = useState(false);

  const handlePortfolioClick = () => {
    navigate('/');

    setTimeout(() => {
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'portfolio') {
            if (entry.isIntersecting) {
              setActiveSection('portfolio');
            } else {
              setActiveSection('');
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    if (location.pathname === '/') {
      const portfolioSection = document.querySelector('#portfolio');
      if (portfolioSection) {
        observer.observe(portfolioSection);
      }
    }

    return () => observer.disconnect();
  }, [location.pathname]);

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
            <li>
              <a
                href="#"
                onClick={handlePortfolioClick}
                className={activeSection === 'portfolio' ? classes.active : ''}
              >
                Portfolio
              </a>
            </li>
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
