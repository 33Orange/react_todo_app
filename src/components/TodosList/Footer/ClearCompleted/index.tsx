import * as React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  clearCompleted: {
    width: '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: '3%',
  },
  clearCompleted__button: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

interface ClearCompletedProps {
  onClearCompletedTodo: (e: React.MouseEvent) => void;
}

const ClearCompleted: React.FC<ClearCompletedProps> = ({ onClearCompletedTodo }) => {
  const classes = useStyles();
  return (
    <div className={classes.clearCompleted}>
      <span className={classes.clearCompleted__button} onClick={onClearCompletedTodo}>
        Clear completed
      </span>
    </div>
  );
};

export default ClearCompleted;
