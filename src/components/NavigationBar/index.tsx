import * as React from 'react';
import useStyles from './style';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { logoutUserRequest } from '../../redux/actionCreators/userActionCreator';

const NavigationBar = () => {
  const { isAuth, user } = useTypedSelector(state => state.user);

  const dispatch = useDispatch();
  const classes = useStyles();

  const logout = () => {
    dispatch(logoutUserRequest());
  };

  return (
    <nav className={classes.root}>
      <h2 className={classes.logo}>todos app</h2>
      <ul className={classes.menu}>
        {isAuth ? (
          <React.Fragment>
            <li className={classes.button}>
              <Link to="/" className={classes.linkProfile}>
                {user.email}
              </Link>
            </li>
            <li className={classes.button}>
              <Link to="/" onClick={logout} className={classes.link}>
                Logout
              </Link>
            </li>
          </React.Fragment>
        ) : (
          <li className={classes.button}>
            <Link to="/" className={classes.link}>
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavigationBar;
