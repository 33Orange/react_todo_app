import * as React from 'react';
import useStyles from './style';

interface Props {
  title: string;
  children: React.ReactNode;
}

const Page = ({ children, title }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>{title}</h1>
      {children}
    </div>
  );
};

export default Page;
