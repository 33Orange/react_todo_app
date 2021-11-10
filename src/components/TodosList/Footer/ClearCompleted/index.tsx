import * as React from 'react';
import useStyles from './style';

interface Props {
  onClearCompletedTodo: (e: React.MouseEvent) => void;
}

const ClearCompleted = ({ onClearCompletedTodo }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.button} onClick={onClearCompletedTodo}>
        Clear completed
      </span>
    </div>
  );
};

export default React.memo(ClearCompleted);
