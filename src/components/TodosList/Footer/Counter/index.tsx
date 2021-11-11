import * as React from 'react';
import useStyles from './style';
import { I18nContext } from '../../../../i18n';

interface Props {
  count: number;
}

const Counter = ({ count }: Props) => {
  const { translate } = React.useContext(I18nContext);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span>
        {count} {translate('items_left')}
      </span>
    </div>
  );
};

export default React.memo(Counter);
