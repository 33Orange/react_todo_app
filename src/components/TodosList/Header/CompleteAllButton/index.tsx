import * as React from 'react';
import useStyles from './style';

interface Props {
  onCompleteAllTodos: () => void;
  isAllDone: boolean;
}

const CompleteAllButton = ({ onCompleteAllTodos, isAllDone }: Props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <input
        type="checkbox"
        className={classes.root}
        id="completeAllBtn"
        checked={!isAllDone}
        onChange={onCompleteAllTodos}
      />
      <label htmlFor="completeAllBtn" className={classes.label}>
        ❯
      </label>
    </React.Fragment>
  );
};

export default React.memo(CompleteAllButton);
