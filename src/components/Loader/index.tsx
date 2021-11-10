import * as React from 'react';
import useStyles from './style';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default React.memo(Loader);
