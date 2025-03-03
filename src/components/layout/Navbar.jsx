import { NavLink, Link } from 'react-router-dom';
import logoBlack from '../../assets/images/logo.png';
import logoWhite from '../../assets/images/logo2.png';
import classes from './Navbar.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handlePortfolioClick = () => {
    closeMenu();
    navigate('/');

    setTimeout(() => {
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  const handleContactClick = () => {
    closeMenu();
    navigate('/');

    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.target.id === 'portfolio' ||
            entry.target.id === 'contact'
          ) {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            } else {
              setActiveSection('');
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (location.pathname === '/') {
      const portfolioSection = document.querySelector('#portfolio');
      const contactSection = document.querySelector('#contact');

      if (portfolioSection) observer.observe(portfolioSection);
      if (contactSection) observer.observe(contactSection);
    } else {
      setActiveSection('');
    }

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const secondSection = document.getElementById('portfolio');
      const margin = 50;
      if (secondSection) {
        const secondSectionTop = secondSection.getBoundingClientRect().top + window.scrollY - margin;
        setIsSticky(scrollTop >= secondSectionTop);
      } else {
        setIsSticky(scrollTop > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navListClasses = `${classes.navList} ${
    isMenuOpen ? classes.show : ''
  } ${isSticky ? classes.stickyLinks : classes.nonStickyLinks}`;

  const burgerColor = isMenuOpen
    ? isSticky
      ? classes.showSticky
      : classes.showNonSticky
    : '';

  return (
    <header className={classes.header}>
      <div className={`${classes.innerContainer} ${isSticky ? classes.sticky : undefined}`}>
        <Link>
          <img
            src={isSticky ? logoBlack : logoWhite}
            alt="lymperi logo"
            className={classes.logo}
          />
        </Link>
        <nav className={classes.navBar}>
          <div
            className={`${classes.hamburger} ${
              isMenuOpen ? classes.hamburgerActive : ''
            } ${
              isSticky ? classes.hamburgerSticky : classes.hamburgerNonSticky
            }`}
            onClick={toggleMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={`${navListClasses} ${burgerColor}`}>
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
                onClick={closeMenu}
              >
                λbout
              </NavLink>
            </li>
            <li>
              <a
                href="#"
                onClick={handleContactClick}
                className={activeSection === 'contact' ? classes.active : ''}
              >
                Contλct
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
