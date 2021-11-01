import * as React from 'react';
import useStyles from './style';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <h2 className={classes.logo}>todos app</h2>
      <ul className={classes.menu}>
        <li className={classes.button}>
          <Link to="/todos" className={classes.link}>
            Todos
          </Link>
        </li>
        <li className={classes.button}>
          <Link to="/" className={classes.link}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
