import * as React from 'react';
import useStyles from './style';
import { I18nContext } from '../../../../i18n';

interface Props {
  onClearCompletedTodo: (e: React.MouseEvent) => void;
}

const ClearCompleted = ({ onClearCompletedTodo }: Props) => {
  const { translate } = React.useContext(I18nContext);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.button} onClick={onClearCompletedTodo}>
        {translate('clear_completed')}
      </span>
    </div>
  );
};

export default React.memo(ClearCompleted);
