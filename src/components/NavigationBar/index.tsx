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
    <nav tabIndex={-1} className={classes.root}>
      <h2 className={classes.logo}>todos app</h2>
      <ul className={classes.menu}>
        {isAuth ? (
          <React.Fragment>
            <li className={classes.button}>
              <Link to="/" tabIndex={-1} className={classes.linkProfile}>
                {user.email}
              </Link>
            </li>
            <li className={classes.button}>
              <Link to="/" tabIndex={-1} onClick={logout} className={classes.link}>
                Logout
              </Link>
            </li>
          </React.Fragment>
        ) : null}
      </ul>
    </nav>
  );
};

export default NavigationBar;
