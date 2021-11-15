import React, { useReducer } from 'react';
import EN from './en.json';
import RU from './ru.json';
import ES from './es.json';
import FR from './fr.json';

interface IInitialState {
  dispatch?: React.Dispatch<any>;
  langCode: string;
  translate: (key: string) => any;
}
interface Props {
  children?: any;
}
const translations: any = {
  en: EN,
  ru: RU,
  es: ES,
  fr: FR,
};

const getTranslate = (langCode: string) => (key: string) => translations[langCode][key] || key;
const initialState: IInitialState = {
  langCode: localStorage.getItem('lang') || 'en',
  translate: getTranslate(localStorage.getItem('lang') || 'en'),
};

export const I18nContext = React.createContext(initialState);

export const I18nContextProvider = ({ children }: Props) => {
  const reducer = (state: IInitialState, action: { type: string; payload: string }) => {
    switch (action.type) {
      case 'setLanguage':
        return {
          langCode: action.payload,
          translate: getTranslate(action.payload),
        };
      default:
        return { ...initialState };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return <I18nContext.Provider value={{ ...state, dispatch }}>{children}</I18nContext.Provider>;
};
