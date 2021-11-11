import * as React from 'react';
import useStyles from './style';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { logoutUserAction } from '../../redux/actionCreators/userActionCreator';
import { isAuthSelector } from '../../redux/selectors';
import LanguageSelect from './LanguageSelect';
import { I18nContext } from '../../i18n';

const NavigationBar = () => {
  const isAuth = useTypedSelector(isAuthSelector);
  const { translate } = React.useContext(I18nContext);
  const dispatch = useDispatch();
  const classes = useStyles();

  const logout = () => {
    dispatch(logoutUserAction.request());
  };

  return (
    <nav tabIndex={-1} className={classes.root}>
      <h2 className={classes.logo}>{translate('logo')}</h2>
      <ul className={classes.menu}>
        <li>
          <LanguageSelect />
        </li>
        {isAuth ? (
          <React.Fragment>
            <li className={classes.button}>
              <Link to="/" tabIndex={-1} onClick={logout} className={classes.link}>
                {translate('logout')}
              </Link>
            </li>
          </React.Fragment>
        ) : null}
      </ul>
    </nav>
  );
};

export default React.memo(NavigationBar);
