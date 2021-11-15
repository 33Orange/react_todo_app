import * as React from 'react';
import { useContext, useState } from 'react';
import useStyles from './style';
import { I18nContext } from '../../../i18n';

// useTranslation -> { trnslate, language, setLanguage }

const LanguageSelect = () => {
  const { langCode, dispatch } = useContext(I18nContext);

  const handleChange = (event: any) => {
    localStorage.setItem('lang', event.target.value);
    dispatch({ type: 'setLanguage', payload: event.target.value });
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <select id="language-select" value={langCode} onChange={handleChange}>
        <option value={'en'}>ENG</option>
        <option value={'ru'}>RUS</option>
        <option value={'es'}>ESP</option>
        <option value={'fr'}>FRE</option>
      </select>
    </div>
  );
};

export default React.memo(LanguageSelect);
