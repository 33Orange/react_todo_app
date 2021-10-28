import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  navigation: {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    height: 30,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    boxShadow:
      '0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2)',
  },
  navigation__logo: {
    color: 'rgba(255, 0, 0, 0.4)',
    fontSize: 20,
  },
  navigation__button: {
    margin: '0 10px',
  },
  navigation__link: {
    textDecoration: 'none',
    color: '#1976d2',
    transition: '0.3s',
    '&:hover': {
      opacity: '0.7',
    },
  },
  navigation__menu: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

interface NavigationBarProps {}

const NavigationBar: React.FC<NavigationBarProps> = () => {
  const classes = useStyles();
  return (
    <nav className={classes.navigation}>
      <h2 className={classes.navigation__logo}>todos app</h2>
      <ul className={classes.navigation__menu}>
        <li className={classes.navigation__button}>
          <Link to="/todos" className={classes.navigation__link}>
            Todos
          </Link>
        </li>
        <li className={classes.navigation__button}>
          <Link to="/" className={classes.navigation__link}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
