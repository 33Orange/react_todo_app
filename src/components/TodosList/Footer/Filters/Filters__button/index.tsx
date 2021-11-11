import * as React from 'react';
import useStyles from './style';
import { I18nContext } from '../../../../../i18n';

interface Props {
  activeFilter: string;
  value: string;
  onChangeFilter: (filter: string) => void;
}

const FiltersButton = ({ onChangeFilter, value, activeFilter }: Props) => {
  const handleChangeFilter = () => {
    onChangeFilter(value);
  };
  const { translate } = React.useContext(I18nContext);
  const classes = useStyles();
  return (
    <span
      onClick={handleChangeFilter}
      className={activeFilter == value ? classes.button + ' active' : classes.button}
    >
      {translate(value)[0].toUpperCase() + translate(value).slice(1)}
    </span>
  );
};

export default React.memo(FiltersButton);
