import * as React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

interface NavigationBarProps {}

const NavigationBar: React.FC<NavigationBarProps> = () => {
  return (
    <nav className="navigation">
      <Button variant="contained" aria-label="small button">
        <Link to="/" className="navigation__link">
          Login
        </Link>
      </Button>
      <Button variant="contained" aria-label="small button">
        <Link to="/todos" className="navigation__link">
          Todos
        </Link>
      </Button>
    </nav>
  );
};

export default NavigationBar;
