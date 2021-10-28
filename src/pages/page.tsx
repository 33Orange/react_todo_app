import * as React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  page: {
    width: 450,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
  },
  page__title: {
    textAlign: `center`,
    fontSize: 80,
    fontWeight: 300,
    color: `rgba(255, 0, 0, 0.2)`,
    width: `100%`,
    margin: `50px 0`,
  },
});
interface PageProps {}

const Page: React.FC<PageProps> = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.page}>{children}</div>;
};

export default Page;
