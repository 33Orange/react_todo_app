import * as React from 'react';
import useStyles from './style';

interface Props {
  title: string;
  children: React.ReactNode;
}

const Page = ({ children, title }: Props) => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.root}>{children}</div>
    </div>
  );
};

export default React.memo(Page);
