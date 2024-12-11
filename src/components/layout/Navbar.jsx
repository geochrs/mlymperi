import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import classes from './Navbar.module.css';
export default function Navbar() {
  return (
    <header className={classes.header}>
      <div className={classes.innerContainer}>
        <Link>
          <img src={logo} alt="lymperi logo" className={classes.logo} />
        </Link>
        <nav className={classes.navBar}>
          <ul className={classes.navList}>
            <li>Portfolio</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
